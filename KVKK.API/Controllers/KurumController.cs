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
    public class KurumController : ControllerBase
    {
        private IKurumRepository kurumRepository;
        public KurumController(IKurumRepository kurumRepo)
        {
            kurumRepository = kurumRepo;
        }

        // GET: api/kurumlar
        [HttpGet("butun-kurumlar")]
        public async Task<IActionResult> Get()
        {
            var kurumListesi = await kurumRepository.GetList();
            return Ok(kurumListesi);
        }

        // GET api/KURUM/{id}/5
        [HttpGet("id-ile-kurum-bulma/id")]
        public IActionResult GetKurumById(string id)
        {
            var kurum= kurumRepository.GetById(id);
            return Ok(kurum);
        }

        // GET api/il-bazinda-kurum-listesi/il
        [HttpGet("il-bazinda-kurum-listesi/il")]
        public  IActionResult GetKurumListByIl(string il)
        {
            var kurumListesi = kurumRepository.GetListByIl(il);
            return Ok(kurumListesi);
        }
        // GET api/ada-göre-kurum/ad
        [HttpGet("ada-göre-kurum/ad")]
        public IActionResult GetKurumByAdi(string ad)
        {
            var kurum = kurumRepository.GetByAdi(ad);
            return Ok(kurum);
        }

        // GET api/ilce-bazinda-kurum-listesi/ilce
        [HttpGet("ilce-bazinda-kurum-listesi/ilce")]
        public IActionResult GetKurumListByIlce(string ilce)
        {
            var kurumListesi = kurumRepository.GetListByIlce(ilce);
            return Ok(kurumListesi);
        }

        // GET api/il-ilce-bazinda-kurum-listesi/ilce
        [HttpGet("il-ilce-bazinda-kurum-listesi/ilce")]
        public IActionResult GetKurumListByIlIlce(string il, string ilce)
        {
            var kurumListesi = kurumRepository.GetListByIlIlce(il,ilce);
            return Ok(kurumListesi);
        }

        // POST api/yeni-kurum-ekleme>
        [HttpPost("yeni-kurum-ekleme")]
        public IActionResult Post([FromBody] KURUM kurum)
        {
            var result = kurumRepository.CreateKurum(kurum);
            if(result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // PUT api/<KurumController>/5
        [HttpPut("kurum-güncelleme")]
        public IActionResult Put([FromBody] KURUM kurum)
        {
            var result = kurumRepository.UpdateKurum(kurum);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // DELETE api/kurum-silme
        [HttpDelete("kurum-silme")]
        public IActionResult Delete(string id)
        {
            var kurum = kurumRepository.GetById(id);
            var result = kurumRepository.DeleteKurum(kurum);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }
    }
}
