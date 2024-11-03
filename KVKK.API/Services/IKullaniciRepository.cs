using KVKK.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public interface IKullaniciRepository
    {
        /// <summary>
        /// Get KULLANICI List
        /// </summary>
        Task<List<KULLANICI>> GetKullaniciList();

        /// <summary>
        /// Get KULLANICI by ID
        /// </summary>
        KULLANICI GetById(string ID);

        /// <summary>
        /// Get KULLANICI by AD/SOYAD
        /// </summary>
        KULLANICI GetByAdSoyad(string AD, string SOYAD);

        /// <summary>
        /// Get KULLANICI by KURUMID
        /// </summary>
        KULLANICI GetByKurumIdKullaniciId(string KURUMID, string KULLANICIID);

        /// <summary>
        /// Get KULLANICI by BIRIMID
        /// </summary>
        KULLANICI GetByBirimId(string BIRIMID, string KULLANICIID);

        /// <summary>
        /// Get KULLANICI by KURUMID/BIRIMID/KULLANICIID
        /// </summary>
        KULLANICI GetByKurumIdBirimIdKullaniciId(string KURUMID, string BIRIMID, string KULLANICIID);
        
        /// <summary>
        /// Get KULLANICI by KURUMID/BIRIMID/AD/SOYAD
        /// </summary>
        KULLANICI GetByKurumIdBirimIdAdSoyad(string KURUMID, string BIRIMID, string AD, string SOYAD);

        /// <summary>
        /// Get KULLANICI by EPOSTA
        /// </summary>
        KULLANICI GetByEposta(string EPOSTA);

        /// <summary>
        /// Get KULLANICI by EPOSTA and SIFRE
        /// </summary>
        KULLANICI GetByEpostaSifre(string EPOSTA, string SIFRE);

        /// <summary>
        /// Create KULLANICI
        /// </summary>
        bool CreateKullanici(KULLANICI kullanici);

        /// <summary>
        /// Update KULLANICI
        /// </summary>
        bool UpdateKullanici(KULLANICI kullanici);

        /// <summary>
        /// Delete KULLANICI
        /// </summary>
        bool DeleteKullanici(KULLANICI kullanici);

        /// <summary>
        /// Save KULLANICI
        /// </summary>
        bool SaveKullanici();
    }
}
