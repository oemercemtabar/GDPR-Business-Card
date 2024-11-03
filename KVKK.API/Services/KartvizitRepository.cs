using KVKK.API.Data;
using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public class KartvizitRepository : IKartvizitRepository
    {
        /// <summary>
        /// Construtor KARTVIZIT
        /// </summary>
        private KvkkDbContext _kvkkKartvizitDBContext;
        public KartvizitRepository(KvkkDbContext kvkkDBContext)
        {
            _kvkkKartvizitDBContext = kvkkDBContext;
        }

        /// <summary>
        /// CreateKartvizit KARTVIZIT API
        /// </summary>
        public bool CreateKartvizit(KARTVIZIT kartvizit)
        {
            _kvkkKartvizitDBContext.Add(kartvizit);
            return SaveKartvizit();
        }

        /// <summary>
        /// DeleteKartvizit KARTVIZIT API
        /// </summary>
        

        /// <summary>
        /// GetKartvizitByAdSoyad KARTVIZIT API
        /// </summary>
        public KARTVIZIT GetKartvizitByAdSoyad(string ad, string soyad)
        {
            return _kvkkKartvizitDBContext.KARTVIZIT.Where(k => k.AD == ad).Where(k => k.SOYAD == soyad).FirstOrDefault();
        }

        /// <summary>
        /// GetKartvizitById KARTVIZIT API
        /// </summary>
        public KARTVIZIT GetKartvizitById(string id)
        {
            return _kvkkKartvizitDBContext.KARTVIZIT.Where(k => k.ID == id).FirstOrDefault();
        }

        

        /// <summary>
        /// GetKartvizitByKurumAdSoyad KARTVIZIT API
        /// </summary>
        public KARTVIZIT GetKartvizitByKurumAdSoyad(string kurumadi, string ad, string soyad)
        {
            return _kvkkKartvizitDBContext.KARTVIZIT.Where(k => k.KURUMADI == kurumadi & k.AD == ad & k.SOYAD == soyad).FirstOrDefault();
        }

        /// <summary>
        /// GetKartvizitByKurumIdAdSoyad KARTVIZIT API
        /// </summary>
        public KARTVIZIT GetKartvizitByKurumIdAdSoyad(string kurumid, string ad, string soyad)
        {
            return _kvkkKartvizitDBContext.KARTVIZIT.Where(k => k.KURUMID == kurumid & k.AD == ad & k.SOYAD == soyad).FirstOrDefault();
        }

        /// <summary>
        /// GetList KARTVIZIT API
        /// </summary>
        public async Task<List<KARTVIZIT>> GetList()
        {
            var kartvizitlistesi = await _kvkkKartvizitDBContext.KARTVIZIT.ToListAsync();
            return kartvizitlistesi;
        }

        public async Task<List<KARTVIZIT>> GetListByKullaniciId(string kullaniciId)
        {
            var kartvizitlistesi = await _kvkkKartvizitDBContext.KARTVIZIT.Where(p=>p.KULLANICIID == kullaniciId).ToListAsync();
            return kartvizitlistesi;
        }

        /// <summary>
        /// SaveKartvizit KARTVIZIT API
        /// </summary>
        public bool SaveKartvizit()
        {
            var saved = _kvkkKartvizitDBContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        /// <summary>
        /// UpdateKartvizit KARTVIZIT API
        /// </summary>
        public bool UpdateKartvizit(KARTVIZIT kartvizit)
        {
            _kvkkKartvizitDBContext.Update(kartvizit);
            return SaveKartvizit();
        }

        void IKartvizitRepository.DeleteKartvizit(string id)
        {
            KARTVIZIT kartvizitToDelete = _kvkkKartvizitDBContext.KARTVIZIT.Where(k => k.ID == id).FirstOrDefault();
            if(kartvizitToDelete != null)
            {

                _kvkkKartvizitDBContext.KARTVIZIT.Remove(kartvizitToDelete);
                _kvkkKartvizitDBContext.SaveChanges();
            }
           
            
        }
    }
}
