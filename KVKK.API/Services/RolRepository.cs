using KVKK.API.Data;
using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public class RolRepository : IRolRepository
    {
        private KvkkDbContext _kvkkRolDBContext;
        public RolRepository(KvkkDbContext kvkkDBContext)
        {
            _kvkkRolDBContext = kvkkDBContext;
        }

        public bool CreateRol(ROL rol)
        {
            var dbRol = _kvkkRolDBContext.ROL.FirstOrDefault(p => p.AD == rol.AD);
            if (dbRol == null)
            {
                _kvkkRolDBContext.Add(rol);
                return SaveRol();
            }
            return false;
        }

        public bool DeleteRol(ROL rol)
        {
            _kvkkRolDBContext.Remove(rol);
            return SaveRol();
        }

        public async Task<List<ROL>> GetList()
        {
            var rollistesi = await _kvkkRolDBContext.ROL.ToListAsync();
            return rollistesi;
        }

        public bool SaveRol()
        {
            var saved = _kvkkRolDBContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        public bool UpdateRol(ROL rol)
        {
            _kvkkRolDBContext.Update(rol);
            return SaveRol();
        }

        public ROL GetById(string rolid)
        {
            return _kvkkRolDBContext.ROL.Where(k => k.ID == rolid).FirstOrDefault();
        }

        public ROL GetDefaultRol()
        {
            return _kvkkRolDBContext.ROL.Where(k => k.ISDEFAULT == true).FirstOrDefault();
        }

        public ROL GetByAd(string rolad)
        {
            return _kvkkRolDBContext.ROL.Where(k => k.AD == rolad).FirstOrDefault();
        }
    }
}
