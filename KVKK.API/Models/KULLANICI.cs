using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Models
{
    public class KULLANICI 
    {
        /// <summary>
        /// Kullanıcı Id'si
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        /// <summary>
        /// Kullanıcı Adı
        /// </summary>
        [Required]
        public string AD { get; set; }

        /// <summary>
        /// Kullanıcı Soyadı
        /// </summary>
        [Required]
        public string SOYAD { get; set; }

        /// <summary>
        /// Kullanıcı Telefon
        /// </summary>
        public string TELEFON { get; set; }

        /// <summary>
        /// Kullanıcı Eposta
        /// </summary>
        public string EPOSTA { get; set; }

        /// <summary>
        /// Kullanıcı Şifre
        /// </summary>
        [Required]
        public string SIFRE { get; set; }

        /// <summary>
        /// Kullanıcı Kurum Id'si
        /// </summary>
        public string KURUMID { get; set; }

        /// <summary>
        /// Kullanıcı Rol Id'si
        /// </summary>
        public string ROLID { get; set; }

        /// <summary>
        /// Kullanıcı Birim Id'si
        /// </summary>
        public string BIRIMID { get; set; }

        /// <summary>
        /// Kullanıcı Aktif Mi?
        /// </summary>
        public Nullable<bool> AKTIFMI { get; set; }

        /// <summary>
        /// Kullanıcı Silindi Mi?
        /// </summary>
        public Nullable<bool> SILINDIMI { get; set; }

        ///// <summary>
        ///// Kullanıcı Birim Call
        ///// </summary>
        //[NotMapped]
        //public virtual BIRIM BIRIM { get; set; }

        ///// <summary>
        ///// Kullanıcı Kurum Call
        ///// </summary>
        //[NotMapped]
        //public virtual KURUM KURUM { get; set; }

        ///// <summary>
        ///// Kullanıcı Rol Call
        ///// </summary>
        //[NotMapped]
        //public virtual ROL ROL { get; set; }
    }
}
