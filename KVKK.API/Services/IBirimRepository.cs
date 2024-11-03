using KVKK.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public interface IBirimRepository
    {
        /// <summary>
        /// Get BIRIM By ID
        /// </summary>
        BIRIM GetById(string birimid);

        /// <summary>
        /// Get BIRIM by ADI
        /// </summary>
        BIRIM GetByAdi(string adi);

        /// <summary>
        /// Get BIRIM By KURUMID
        /// </summary>
        BIRIM GetByKurumId(string kurumid);

        /// <summary>
        /// Get BIRIM List
        /// </summary>
        Task<List<BIRIM>> GetList();

        /// <summary>
        /// Get BIRIM List
        /// </summary>
        Task<List<BIRIM>> GetList(string kurumid);

        /// <summary>
        /// Create BIRIM
        /// </summary>
        bool CreateBirim(BIRIM birim);

        /// <summary>
        /// Update BIRIM
        /// </summary>
        bool UpdateBirim(BIRIM birim);

        /// <summary>
        /// Delete BIRIM
        /// </summary>
        bool DeleteBirim(BIRIM birim);

        /// <summary>
        /// Save BIRIM
        /// </summary>
        bool SaveBirim();
    }
}
