using KVKK.API.Data;
using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public class KurumRepository : IKurumRepository
    {
        /// <summary>
        /// Constructor BIRIM 
        /// </summary>
        private KvkkDbContext _kvkkKurumDBContext;
        public KurumRepository(KvkkDbContext kvkkDBContext) 
        {
            _kvkkKurumDBContext = kvkkDBContext;
        }

        /// <summary>
        /// CreateKurum KURUM API
        /// </summary>
        public bool CreateKurum(KURUM kurum)
        {
            _kvkkKurumDBContext.Add(kurum);
            return SaveKurum();
        }

        /// <summary>
        /// DeleteKurum KURUM API
        /// </summary>
        public bool DeleteKurum(KURUM kurum)
        {
            _kvkkKurumDBContext.Remove(kurum);
            return SaveKurum();
        }

        /// <summary>
        /// GetByAdi KURUM API
        /// </summary>
        public KURUM GetByAdi(string adi)
        {
            return _kvkkKurumDBContext.KURUM.Where(k => k.ADI == adi).FirstOrDefault();
        }

        /// <summary>
        /// GetById KURUM API
        /// </summary>
        public KURUM GetById(string kurumid)
        {
            return _kvkkKurumDBContext.KURUM.Where(k => k.ID == kurumid).FirstOrDefault();
        }

        /// <summary>
        /// GetKartvizitListById KURUM API
        /// </summary>
        public List<KARTVIZIT> GetKartvizitListById(string kurumid)
        {
            throw new NotImplementedException();
        }
     
        /// <summary>
        /// GetAllList KURUM API
        /// </summary>
        public async Task<List<KURUM>> GetList()
        {
            var kurumListesi = await _kvkkKurumDBContext.KURUM.ToListAsync();
            return kurumListesi; 
        }

        /// <summary>
        /// GetListByIl List KURUM API
        /// </summary>
        public List<KURUM> GetListByIl(string il)
        {
            return _kvkkKurumDBContext.KURUM.Where(k => k.IL == il).ToList();
        }

        /// <summary>
        /// GetListByIlce List KURUM API
        /// </summary>
        public List<KURUM> GetListByIlce(string ilce)
        {
            return _kvkkKurumDBContext.KURUM.Where(k => k.ILCE == ilce).ToList();
        }

        /// <summary>
        /// GetListByIlIlce List KURUM API
        /// </summary>
        public List<KURUM> GetListByIlIlce(string il, string ilce)
        {
            return _kvkkKurumDBContext.KURUM.Where(k => k.IL == il & k.ILCE == ilce).ToList();
        }

        /// <summary>
        /// SaveKurum KURUM API
        /// </summary>
        public bool SaveKurum()
        {
            var saved = _kvkkKurumDBContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        /// <summary>
        /// UpdateKurum KURUM API
        /// </summary>
        public bool UpdateKurum(KURUM kurum)
        {
            _kvkkKurumDBContext.Update(kurum);
            return SaveKurum();
        }
    }
}
