using KVKK.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public interface IPaylasimRepository
    {
        /// <summary>
        /// Get PAYLASIM By paylasankullaniciid
        /// </summary>
        Task<List<PAYLASIM>> GetByPaylasanKullaniciId(string paylasankullaniciid);

        /// <summary>
        /// Get PAYLASIM By paylasimisteyenid
        /// </summary>
        Task<List<PAYLASIM>> GetByPaylasimIsteyenKullaniciId(string paylasimisteyenid);

        /// <summary>
        /// Get PAYLASIM by kartvizitid
        /// </summary>
        Task<List<PAYLASIM>> GetByKartvizitId(string kartvizitid);


        /// <summary>
        /// Get PAYLASIM List
        /// </summary>
        Task<List<PAYLASIM>> GetList();

        /// <summary>
        /// Create PAYLASIM
        /// </summary>
        bool CreatePaylasim(PAYLASIM paylasim);

        /// <summary>
        /// Update PAYLASIM
        /// </summary>
        bool UpdatePaylasim(PAYLASIM paylasim);

        /// <summary>
        /// Delete PAYLASIM
        /// </summary>
        bool DeletePaylasim(PAYLASIM paylasim);

        /// <summary>
        /// Save PAYLASIM
        /// </summary>
        bool SavePaylasim();
    }
}
