using KVKK.API.Models;
using KVKK.API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KVKK.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KullaniciController : ControllerBase
    {
        private readonly IKullaniciRepository _kullaniciRepository;

        private readonly IRolRepository _rolRepository;

        public KullaniciController(IKullaniciRepository kullaniciRepo, IRolRepository rolRepo)
        {
            _kullaniciRepository = kullaniciRepo;
            _rolRepository = rolRepo;
        }

        // GET: api/<KullaniciController>
        [HttpGet("butun-kullanıcılar")]
        public async Task<IActionResult> Get()
        {
            var kullanicilistesi = await _kullaniciRepository.GetKullaniciList();
            return Ok(kullanicilistesi);
        }

        // GET api/id-ile-kullanici/id
        [HttpGet("id-ile-kullanici/id")]
        public IActionResult GetKullaniciById(string id)
        {
            var kullanici = _kullaniciRepository.GetById(id);
            return Ok(kullanici);
        }

        // GET api/id-ile-kullanici/id
        [HttpGet("duzenleme-icin-id-ile-kullanici/id")]
        public IActionResult GetKullaniciByIdOfDuzenleme(string id)
        {
            var kullanici = _kullaniciRepository.GetById(id);
            return Ok(kullanici);
        }

        // GET api/ad-soyad-ile-kullanici/ad-soyad
        [HttpGet("ad-soyad-ile-kullanici/ad-soyad")]
        public IActionResult GetKullaniciByAdSoyad(string ad, string soyad)
        {
            var kullanici = _kullaniciRepository.GetByAdSoyad(ad, soyad);
            return Ok(kullanici);
        }

        // GET api/eposta-sifre-ile-kullanici/eposta-sifre
        [HttpGet("eposta-sifre-ile-kullanici/eposta-sifre")]
        public IActionResult GetKullaniciByEpostaSifre(string eposta, string sifre)
        {
            var kullanici = _kullaniciRepository.GetByEpostaSifre(eposta, sifre);
            if (kullanici == null) return Ok(null);
            var rol = _rolRepository.GetById(kullanici.ROLID);
            return Ok(kullanici);
        }

        // GET api/kurumid-kullaniciid-ile-kullanici/kurum-birimid
        [HttpGet("kurumid-kullaniciid-ile-kullanici/kurumid-birimid")]
        public IActionResult GetKullaniciKurumIdKullaniciId(string kurumid, string kullaniciid)
        {
            var kullanici = _kullaniciRepository.GetByKurumIdKullaniciId(kurumid, kullaniciid);
            return Ok(kullanici);
        }

        // GET api/birimid-kullaniciid-ile-kullanici/birimid-kullaniciid
        [HttpGet("birimid-kullaniciid-ile-kullanici/birimid-kullaniciid")]
        public IActionResult GetKullaniciBirimId(string birimid, string kullaniciid)
        {
            var kullanici = _kullaniciRepository.GetByBirimId(birimid, kullaniciid);
            return Ok(kullanici);
        }

        // GET api/kurumid-birimid-kullaniciid-ile-kullanici/kurumid-birimid-kullaniciid
        [HttpGet("kurumid-birimid-kullaniciid-ile-kullanici/kurumid-birimid-kullaniciid")]
        public IActionResult GetKullaniciKurumBirimKullaniciId(string kurumid, string birimid, string kullaniciid)
        {
            var kullanici = _kullaniciRepository.GetByKurumIdBirimIdKullaniciId(kurumid, birimid, kullaniciid);
            return Ok(kullanici);
        }

        // GET api/kurumid-birimid-ad-soyad-ile-kullanici/kurumid-birimid-ad-soyad
        [HttpGet("kurumid-birimid-ad-soyad-ile-kullanici/kurumid-birimid-ad-soyad")]
        public IActionResult GetKullaniciBirimIdAdSoyad(string kurumid, string birimid, string ad, string soyad)
        {
            var kullanici = _kullaniciRepository.GetByKurumIdBirimIdAdSoyad(kurumid, birimid, ad, soyad);
            return Ok(kullanici);
        }

        // GET api/birimid-kullaniciid-ile-kullanici/birimid-kullaniciid
        [HttpGet("eposta-ile-kullanici/eposta")]
        public IActionResult GetKullaniciEposta(string eposta)
        {
            var kullanici = _kullaniciRepository.GetByEposta(eposta);
            return Ok(kullanici);
        }

        // POST api/<KullaniciController>
        [HttpPost("yeni-kullanici-ekleme")]
        public IActionResult Post([FromBody] KULLANICI kullanici)
        {
            var defaultRol = _rolRepository.GetDefaultRol();
            kullanici.ROLID = defaultRol == null ? string.Empty : defaultRol.ID;
            var result = _kullaniciRepository.CreateKullanici(kullanici);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // PUT api/kullanici-güncelleme
        [HttpPut("kullanici-guncelleme")]
        public IActionResult Put([FromBody] KULLANICI kullanici)
        {
            if (string.IsNullOrEmpty(kullanici.ROLID))
            {
                var defaultRol = _rolRepository.GetDefaultRol();
                kullanici.ROLID = defaultRol.ID;
            }
            var result = _kullaniciRepository.UpdateKullanici(kullanici);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // DELETE api/<KullaniciController>/5
        [HttpPost("kullanici-silme")]
        public IActionResult Delete(string id)
        {
            KULLANICI kullanici = _kullaniciRepository.GetById(id);
            var result = _kullaniciRepository.DeleteKullanici(kullanici);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // POST api/<KullaniciController>
        [HttpPost("post-kullanici-rol-atama")]
        public IActionResult KullaniciRolAtamaPost([FromBody] KULLANICI kullanici)
        {
            var result = _kullaniciRepository.UpdateKullanici(kullanici);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }
    }
}
