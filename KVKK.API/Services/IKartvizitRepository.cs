using KVKK.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public interface IKartvizitRepository
    {
        /// <summary>
        /// Get KARTVIZIT List
        /// </summary>
        Task<List<KARTVIZIT>> GetList();

        /// <summary>
        /// Get KARTVIZIT by ID
        /// </summary>
        KARTVIZIT GetKartvizitById(string id);

        Task<List<KARTVIZIT>> GetListByKullaniciId(string kullaniciId);

        /// <summary>
        /// Get KARTVIZIT by AD/SOYAD
        /// </summary>
        KARTVIZIT GetKartvizitByAdSoyad(string ad, string soyad);

        /// <summary>
        /// Get KARTVIZIT by KURUM/AD/SOYAD
        /// </summary>
        KARTVIZIT GetKartvizitByKurumAdSoyad(string kurumadi, string ad, string soyad);

        /// <summary>
        /// Get KARTVIZIT by KURUMID/AD/SOYAD
        /// </summary>
        KARTVIZIT GetKartvizitByKurumIdAdSoyad(string kurumid, string ad, string soyad);

        bool CreateKartvizit(KARTVIZIT kartvizit);

        /// <summary>
        /// Update KARTVIZIT
        /// </summary>
        bool UpdateKartvizit(KARTVIZIT kartvizit);

        /// <summary>
        /// Delete KURUM
        /// </summary>
        void DeleteKartvizit(string id);

        /// <summary>
        /// Save KURUM
        /// </summary>
        bool SaveKartvizit();
    }
}
