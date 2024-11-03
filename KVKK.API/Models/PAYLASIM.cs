using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Models
{
    public class PAYLASIM
    {

        /// <summary>
        /// Paylaşım Paylaşan Kullanıcı Id
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        /// <summary>
        /// Paylaşım Paylaşan Kullanıcı Id
        /// </summary>
        public string PAYLASANKULLANICIID { get; set; }

        /// <summary>
        /// Paylaşım Paylaşmayı İsteyen Kullanıcı Id
        /// </summary>
        public string PAYLASIMISTEYENKULLANICIID { get; set; }

        /// <summary>
        /// Paylaşım Kartvizit Id
        /// </summary>
        public string KARTVIZITID { get; set; }

        /// <summary>
        /// Paylaşım İstek Tarihi ve Saati
        /// </summary>
        public DateTime PAYLASIMISTEKTARIH { get; set; }

        /// <summary>
        /// Paylaşım Belirlenen Süre
        /// </summary>
        public int PAYLASIMSURE { get; set; }

        /// <summary>
        /// Paylaşım Aktif Mi?
        /// </summary>
        public Nullable<bool> AKTIFMI { get; set; }

        /// <summary>
        /// Paylaşım Bitti Mi?
        /// </summary>
        public Nullable<bool> BITTIMI { get; set; }
    }
}
