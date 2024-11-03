using KVKK.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public interface IKurumRepository
    {
        /// <summary>
        /// Get KURUM By ID
        /// </summary>
        KURUM GetById(string kurumid);

        /// <summary>
        /// Get KURUM by ADI
        /// </summary>
        KURUM GetByAdi(string adi);

        /// <summary>
        /// Get KURUM List
        /// </summary>
        Task<List<KURUM>> GetList();

        /// <summary>
        /// Get KURUM List by IL
        /// </summary>
        List<KURUM> GetListByIl(string il);

        /// <summary>
        /// Get KURUM List By ILCE
        /// </summary>
        List<KURUM> GetListByIlce(string ilce);

        /// <summary>
        /// Get KURUM List By IL/ILCE
        /// </summary>
        List<KURUM> GetListByIlIlce(string il, string ilce);

        /// <summary>
        /// Get KARTVIZIT List By KURUMID
        /// </summary>
        List<KARTVIZIT> GetKartvizitListById(string kurumid);


        /// <summary>
        /// Create KURUM
        /// </summary>
        bool CreateKurum(KURUM kurum);

        /// <summary>
        /// Update KURUM
        /// </summary>
        bool UpdateKurum(KURUM kurum);

        /// <summary>
        /// Delete KURUM
        /// </summary>
        bool DeleteKurum(KURUM kurum);

        /// <summary>
        /// Save KURUM
        /// </summary>
        bool SaveKurum();
    }
}
