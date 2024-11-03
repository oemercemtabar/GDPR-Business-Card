using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Models
{
    public class BIRIM
    {
        /// <summary>
        /// Birim Id'si
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        /// <summary>
        /// Birim Adı
        /// </summary>
        [Required]
        public string AD { get; set; }

        /// <summary>
        /// Birim Kurum Id'si
        /// </summary>
        [Required]
        public string KURUMID { get; set; }

        /// <summary>
        /// Birim Aktif Mi?
        /// </summary>
        public Nullable<bool> AKTIFMI { get; set; }

        /// <summary>
        /// Birim Silindi Mi?
        /// </summary>
        public Nullable<bool> SILINDIMI { get; set; }

        /// <summary>
        /// Birim Kullanıcı Listesi
        /// </summary>
        [NotMapped]
        public virtual List<KULLANICI> KULLANICILISTESI { get; set; }
    }
}
