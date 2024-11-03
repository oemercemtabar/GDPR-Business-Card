using KVKK.API.Data;
using KVKK.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public class KullaniciRepository : IKullaniciRepository
    {
        private KvkkDbContext _kvvkKullaniciDbContext;
        public KullaniciRepository(KvkkDbContext kvkkDBContext)
        {
            _kvvkKullaniciDbContext = kvkkDBContext;
        }

        /// <summary>
        /// CreateKullanici API
        /// </summary>
        public bool CreateKullanici(KULLANICI kullanici)
        {
            _kvvkKullaniciDbContext.Add(kullanici);
            return SaveKullanici();
        }

        /// <summary>
        /// DeleteKullanici API
        /// </summary>
        public bool DeleteKullanici(KULLANICI kullanici)
        {
            _kvvkKullaniciDbContext.Remove(kullanici);
            return SaveKullanici();
        }

        /// <summary>
        /// GetKullaniciList KULLANICI API
        /// </summary>
        public async Task<List<KULLANICI>> GetKullaniciList()
        {
            var kullanicilistesi = await _kvvkKullaniciDbContext.KULLANICI.ToListAsync();
            return kullanicilistesi;
        }

        /// <summary>
        /// SaveKullanici API
        /// </summary>
        public bool SaveKullanici()
        {
            var saved = _kvvkKullaniciDbContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        /// <summary>
        /// UpdateKullanici API
        /// </summary>
        public bool UpdateKullanici(KULLANICI kullanici)
        {
            _kvvkKullaniciDbContext.Update(kullanici);
            return SaveKullanici();
        }

        /// <summary>
        /// GetById KULLANICI API
        /// </summary>
        public KULLANICI GetById(string id)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.ID == id).FirstOrDefault();
        }

        /// <summary>
        /// GetByAdSoyad KULLANICI API
        /// </summary>
        public KULLANICI GetByAdSoyad(string ad, string soyad)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.AD == ad & k.SOYAD == soyad).FirstOrDefault();
        }

        /// <summary>
        /// GetByKurumIdKullaniciId KULLANICI API
        /// </summary>
        public KULLANICI GetByKurumIdKullaniciId(string kurumid, string kullaniciid)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.KURUMID == kurumid & k.ID == kullaniciid).FirstOrDefault();
        }

        /// <summary>
        /// GetByBirimId KULLANICI API
        /// </summary>
        public KULLANICI GetByBirimId(string birimid, string kullaniciid)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.BIRIMID == birimid & k.ID == kullaniciid).FirstOrDefault();
        }

        /// <summary>
        /// GetByKurumIdBirimIdKullaniciId KULLANICI API
        /// </summary>
        public KULLANICI GetByKurumIdBirimIdKullaniciId(string kurumid, string birimid, string kullaniciid)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.KURUMID == birimid & k.BIRIMID == birimid & k.ID == kullaniciid).FirstOrDefault();
        }

        /// <summary>
        /// GetByKurumIdBirimIdAdSoyad KULLANICI API
        /// </summary>
        public KULLANICI GetByKurumIdBirimIdAdSoyad(string kurumid, string birimid, string ad, string soyad)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.KURUMID == birimid & k.BIRIMID == birimid & k.AD == ad & k.SOYAD == soyad).FirstOrDefault();
        }

        /// <summary>
        /// GetByEposta KULLANICI API
        /// </summary>
        public KULLANICI GetByEposta(string eposta)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.EPOSTA == eposta).FirstOrDefault();
        }

        public KULLANICI GetByEpostaSifre(string eposta, string sifre)
        {
            return _kvvkKullaniciDbContext.KULLANICI.Where(k => k.EPOSTA == eposta && k.SIFRE == sifre).FirstOrDefault();
        }
    }
}
