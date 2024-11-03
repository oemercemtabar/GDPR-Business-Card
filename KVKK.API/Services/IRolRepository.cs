using KVKK.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Services
{
    public interface IRolRepository
    {
        /// <summary>
        /// Get ROL By ID
        /// </summary>
        ROL GetById(string rolid);

        /// <summary>
        /// Get ROL By ID
        /// </summary>
        ROL GetByAd(string rolad);

        /// <summary>
        /// Get ROL List
        /// </summary>
        Task<List<ROL>> GetList();

        /// <summary>
        /// Create ROL
        /// </summary>
        bool CreateRol(ROL rol);

        /// <summary>
        /// Update ROL
        /// </summary>
        bool UpdateRol(ROL rol);

        /// <summary>
        /// Delete ROL
        /// </summary>
        bool DeleteRol(ROL rol);

        /// <summary>
        /// Save ROL
        /// </summary>
        bool SaveRol();

        /// <summary>
        /// Get Default Rol 
        /// </summary>
        ROL GetDefaultRol();
    }
}
