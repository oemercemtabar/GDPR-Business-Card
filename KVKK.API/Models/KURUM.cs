using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Models
{
    public class KURUM
    {
        /// <summary>
        /// Kurum Id'si
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        /// <summary>
        /// Kurum Adı
        /// </summary>
        [Required]
        public string ADI { get; set; }
        
        /// <summary>
        /// Kurum Ili
        /// </summary>
        [Required]
        public string IL { get; set; }

        /// <summary>
        /// Kurum Ilçesi
        /// </summary>
        [Required]
        public string ILCE { get; set; }

        /// <summary>
        /// Kurum Adresi
        /// </summary>
        [Required]
        public string ADRES { get; set; }

        /// <summary>
        /// Kurum Aktif Mi?
        /// </summary>
        public Nullable<bool> AKTIFMI { get; set; }

        /// <summary>
        /// Kurum Silindi Mi?
        /// </summary>
        public Nullable<bool> SILINDIMI { get; set; }
    }
}
