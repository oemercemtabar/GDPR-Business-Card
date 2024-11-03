using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Models
{
    public class ROL
    {
        /// <summary>
        /// Rol Id'si
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        /// <summary>
        /// Rol Adı
        /// </summary>
        [Required]
        public string AD { get; set; }

        public Nullable<bool> ISDEFAULT { get; set; } = false;

        public Nullable<bool> ISSUPERADMIN { get; set; } = false;
    }
}
