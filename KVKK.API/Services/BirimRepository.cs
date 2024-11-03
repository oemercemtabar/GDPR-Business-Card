using KVKK.API.Data;
using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public class BirimRepository : IBirimRepository
    {
        /// <summary>
        /// BIRIM Constructor
        /// </summary>
        private KvkkDbContext _kvkkBirimDBContext;
        public BirimRepository(KvkkDbContext kvkkDBContext)
        {
            _kvkkBirimDBContext = kvkkDBContext;
        }

        /// <summary>
        /// CreateBirim BIRIM API
        /// </summary>
        public bool CreateBirim(BIRIM birim)
        {
            _kvkkBirimDBContext.Add(birim);
            return SaveBirim();
        }

        /// <summary>
        /// DeleteBirim BIRIM API
        /// </summary>
        public bool DeleteBirim(BIRIM birim)
        {
            _kvkkBirimDBContext.Remove(birim);
            return SaveBirim();
        }

        /// <summary>
        /// GetBirimByAdi BIRIM API
        /// </summary>
        public BIRIM GetByAdi(string adi)
        {
            return _kvkkBirimDBContext.BIRIM.Where(b => b.AD == adi).FirstOrDefault();
        }

        /// <summary>
        /// GetBirimById BIRIM API
        /// </summary>
        public BIRIM GetById(string birimid)
        {
            return _kvkkBirimDBContext.BIRIM.Where(b => b.ID == birimid).FirstOrDefault();
        }

        /// <summary>
        /// GetBirimByKurumId BIRIM API
        /// </summary>
        public BIRIM GetByKurumId(string kurumid)
        {
            return _kvkkBirimDBContext.BIRIM.Where(b => b.KURUMID == kurumid).FirstOrDefault();
        }

        /// <summary>
        /// GetList BIRIM API
        /// </summary>
        public async Task<List<BIRIM>> GetList()
        {
            var birimlistesi = await _kvkkBirimDBContext.BIRIM.ToListAsync();
            return birimlistesi;
        }

       

        /// <summary>
        /// SaveBirim BIRIM API
        /// </summary>
        public bool SaveBirim()
        {
            var saved = _kvkkBirimDBContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        /// <summary>
        /// UpdateBirim BIRIM API
        /// </summary>
        public bool UpdateBirim(BIRIM birim)
        {
            _kvkkBirimDBContext.Update(birim);
            return SaveBirim();
        }

        public async Task<List<BIRIM>> GetList(string kurumid)
        {
            var birimlistesi = await _kvkkBirimDBContext.BIRIM.Where(b => b.KURUMID == kurumid).ToListAsync();
            return birimlistesi;
        }
    }
}
