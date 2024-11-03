using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Models
{
    public class KARTVIZIT
    {
        /// <summary>
        /// Kartvizit Id'si
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        /// <summary>
        /// Kartvizit Kurum Adı
        /// </summary>
        [Required]
        public string KURUMADI { get; set; }

        /// <summary>
        /// Kartvizit Kişi Adı
        /// </summary>
        [Required]
        public string AD { get; set; }

        /// <summary>
        /// Kartvizit Kişi Soyadı
        /// </summary>
        [Required]
        public string SOYAD { get; set; }

        /// <summary>
        /// Kartvizit Kişi Ünvan
        /// </summary>
        [Required]
        public string UNVAN { get; set; }

        /// <summary>
        /// Kartvizit Kişi Birim
        /// </summary>
        [Required]
        public string BIRIM { get; set; }

        /// <summary>
        /// Kartvizit Kurum Il
        /// </summary>
        [Required]
        public string IL { get; set; }

        /// <summary>
        /// Kartvizit Kurum Ilçe
        /// </summary>
        [Required]
        public string ILCE { get; set; }

        /// <summary>
        /// Kartvizit Kurum Adres
        /// </summary>
        [Required]
        public string ADRES { get; set; }

        /// <summary>
        /// Kartvizit Kurum Telefon
        /// </summary>
        [Required]
        public string TELEFON { get; set; }

        /// <summary>
        /// Kartvizit Kişi/Kurum Eposta
        /// </summary>
        [Required]
        public string EPOSTA { get; set; }

        /// <summary>
        /// Kartvizit Kişi/Kurum Fax
        /// </summary>
        public string FAX { get; set; }

        /// <summary>
        /// Kartvizit Aktif Mi?
        /// </summary>
        public Nullable<bool> AKTIFMI { get; set; }

        /// <summary>
        /// Kartvizit Silindi Mi?
        /// </summary>
        public Nullable<bool> SILINDIMI { get; set; }

        /// <summary>
        /// Kartvizit Izin Var Mı?
        /// </summary>
        public Nullable<bool> IZINVARMI { get; set; }

        /// <summary>
        /// Kartvizit Kurum Id'si
        /// </summary>
        public string KURUMID { get; set; }

        /// <summary>
        /// Kartvizit Birim Id'si
        /// </summary>
        public string BIRIMID { get; set; }

        /// <summary>
        /// Kartvizit Ekleyen Kullanıcı Id'si
        /// </summary>
        public string KULLANICIID { get; set; }
    }
}
