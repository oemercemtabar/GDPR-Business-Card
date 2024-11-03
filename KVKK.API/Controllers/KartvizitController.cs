using KVKK.API.Models;
using KVKK.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KVKK.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KartvizitController : ControllerBase
    {
        private IKartvizitRepository kartvizitRepository;
        private IPaylasimRepository paylasimRepository;
        private IKullaniciRepository kullaniciRepository;
        public KartvizitController(IKartvizitRepository kartvizitRepo, IPaylasimRepository paylasimRepo, IKullaniciRepository kullaniciRepo)
        {
            kartvizitRepository = kartvizitRepo;
            paylasimRepository = paylasimRepo;
            kullaniciRepository = kullaniciRepo;
        }

        // GET: api/butun-kartvizitler
        [HttpGet("butun-kartvizitler")]
        public async Task<IActionResult> GetKartvizit()
        {
            var kartvizitlistesi = await kartvizitRepository.GetList();
            var paylasimListesi = await paylasimRepository.GetList();
            //foreach(KARTVIZIT kartvizit in kartvizitlistesi)
            //{
            //    foreach(PAYLASIM paylasim in paylasimListesi)
            //    {

            //    }
            //}

            return Ok(kartvizitlistesi);
        }

        //GET: api/butun-kartvizitler
        [HttpGet("butun-kartvizitler/kullanici-paylasim")]
        public async Task<IActionResult> GetKartvizitKullaniciPaylasim(string kullaniciid)
        {
            var kartvizitlistesi = await kartvizitRepository.GetList();
            var paylasimListesi = await paylasimRepository.GetByPaylasimIsteyenKullaniciId(kullaniciid);

            DateTime bugun = DateTime.Now;
            paylasimListesi = paylasimListesi.Where(p => ((p.PAYLASIMISTEKTARIH <= bugun) && (bugun <= p.PAYLASIMISTEKTARIH.AddHours(p.PAYLASIMSURE)) && p.AKTIFMI == true)).ToList();

            foreach (PAYLASIM paylasim in paylasimListesi)
            {
                kartvizitlistesi.Where(p => p.ID == paylasim.KARTVIZITID).FirstOrDefault().KULLANICIID = kullaniciid;
            }

            return Ok(kartvizitlistesi);
        }

        // GET: api/butun-kartvizitler
        [HttpGet("butun-kartvizitler-kullaniciid")]
        public async Task<IActionResult> GetKartvizitWithKullaniciId(string kullaniciId)
        {
            var kartvizitlistesi = await kartvizitRepository.GetListByKullaniciId(kullaniciId);
            return Ok(kartvizitlistesi);
        }



        // GET api/ad-soyad-ile-kartvizit/ad-soyad
        [HttpGet("ad-soyad-ile-kartvizit/ad-soyad")]
        public IActionResult GetKartvizitAdSoyad(string ad, string soyad)
        {
            var kartvizit = kartvizitRepository.GetKartvizitByAdSoyad(ad, soyad);
            return Ok(kartvizit);
        }

        // GET api/kurumad-ad-soyad-ile-kartvizit/kurum-ad-soyad
        [HttpGet("kurumad-ad-soyad-ile-kartvizit/kurum-ad-soyad")]
        public IActionResult GetKartvizitKurumAdSoyad(string kurumad, string ad, string soyad)
        {
            var kartvizit = kartvizitRepository.GetKartvizitByKurumAdSoyad(kurumad, ad, soyad);
            return Ok(kartvizit);
        }

        // GET api/kurumid-ad-soyad-ile-kartvizit/kurum-ad-soyad
        [HttpGet("kurumid-ad-soyad-ile-kartvizit/kurum-ad-soyad")]
        public IActionResult GetKartvizitKurumIdAdSoyad(string kurumid, string ad, string soyad)
        {
            var kartvizit = kartvizitRepository.GetKartvizitByKurumIdAdSoyad(kurumid, ad, soyad);
            return Ok(kartvizit);
        }

        // POST api/yeni-kartvizit-ekleme
        [HttpPost("yeni-kartvizit-ekleme")]
        public IActionResult Post([FromBody] KARTVIZIT kartvizit)
        {
            var result = kartvizitRepository.CreateKartvizit(kartvizit);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // PUT api/kullanici-güncelleme
        [HttpPut("kartvizit-güncelleme")]
        public IActionResult Put([FromBody] KARTVIZIT kartvizit)
        {
            var result = kartvizitRepository.UpdateKartvizit(kartvizit);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // DELETE api/<KullaniciController>/5
        [HttpDelete("kartvizit-silme/id")]
        public IActionResult Delete(string id)
        {

            kartvizitRepository.DeleteKartvizit(id);
            return Ok("Başarılı");

        }
    }
}
