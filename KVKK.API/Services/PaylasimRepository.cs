using KVKK.API.Data;
using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public class PaylasimRepository : IPaylasimRepository
    {
        /// <summary>
        /// PAYLASIM Constructor
        /// </summary>
        private KvkkDbContext _kvkkPaylasimDbContext;
        public PaylasimRepository(KvkkDbContext kvkkDBContext)
        {
            _kvkkPaylasimDbContext = kvkkDBContext;
        }
        public bool CreatePaylasim(PAYLASIM paylasim)
        {
            _kvkkPaylasimDbContext.Add(paylasim);
            return SavePaylasim();
        }

        public bool DeletePaylasim(PAYLASIM paylasim)
        {
            _kvkkPaylasimDbContext.Remove(paylasim);
            return SavePaylasim();
        }

        public async Task<List<PAYLASIM>> GetList()
        {
            var paylasimlistesi = await _kvkkPaylasimDbContext.PAYLASIM.ToListAsync();
            return paylasimlistesi;
        }


        public bool SavePaylasim()
        {
            var saved = _kvkkPaylasimDbContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        public bool UpdatePaylasim(PAYLASIM paylasim)
        {
            _kvkkPaylasimDbContext.Update(paylasim);
            return SavePaylasim();
        }

        public async Task<List<PAYLASIM>> GetByKartvizitId(string kartvizitid)
        {
            var paylasimlistesi = await _kvkkPaylasimDbContext.PAYLASIM.Where(b => b.KARTVIZITID == kartvizitid).ToListAsync();
            return paylasimlistesi;
        }

        public async Task<List<PAYLASIM>> GetByPaylasanKullaniciId(string paylasankullaniciid)
        {
            var paylasimlistesi = await _kvkkPaylasimDbContext.PAYLASIM.Where(b => b.PAYLASANKULLANICIID == paylasankullaniciid).ToListAsync();
            return paylasimlistesi;
        }

        public async Task<List<PAYLASIM>> GetByPaylasimIsteyenKullaniciId(string paylasimisteyenid)
        {
            var paylasimlistesi = await _kvkkPaylasimDbContext.PAYLASIM.Where(b => b.PAYLASIMISTEYENKULLANICIID == paylasimisteyenid).ToListAsync();
            return paylasimlistesi;
        }
    }
}
