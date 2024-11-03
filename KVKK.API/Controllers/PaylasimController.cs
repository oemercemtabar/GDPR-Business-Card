using KVKK.API.Models;
using KVKK.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVKK.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaylasimController : ControllerBase
    {
        private IPaylasimRepository paylasimRepository;
        public PaylasimController(IPaylasimRepository paylasimRepo)
        {
            paylasimRepository = paylasimRepo;
        }

        // GET: api/birimler
        [HttpGet("butun-paylasimlar")]
        public async Task<IActionResult> Get()
        {
            var currentDateTime = DateTime.Now;
            var paylasimlistesi = await paylasimRepository.GetList();
            foreach(PAYLASIM paylasim in paylasimlistesi)
            {
                if(currentDateTime >=  paylasim.PAYLASIMISTEKTARIH.AddHours(paylasim.PAYLASIMSURE))
                {
                    paylasim.AKTIFMI = false;
                    paylasim.BITTIMI = true;
                }
            }
            return Ok(paylasimlistesi);
        }

        // GET: api/birimler/kurumid
        [HttpGet("paylasim-isteyen-kullaniciid/butun-paylasimlar")]
        public async Task<IActionResult> GetList(string paylasimisteyenkullaniciid)
        {
            var paylasimlistesi = await paylasimRepository.GetByPaylasimIsteyenKullaniciId(paylasimisteyenkullaniciid);
            return Ok(paylasimlistesi);
        }


        // GET api/kurumid-ile-birim-bulma/kurumid
        [HttpGet("paylasan-kullaniciid-ile/paylasim-listesi")]
        public async Task<IActionResult> GetByPaylasanKullaniciId(string paylasankullaniciid)
        {
            var paylasimlistesi = await paylasimRepository.GetByPaylasanKullaniciId(paylasankullaniciid);
            return Ok(paylasimlistesi);
        }

        // GET api/kurumid-ile-birim-bulma/kurumid
        [HttpGet("kartvizitid-ile/paylasim-listesi")]
        public async Task<IActionResult> GetByKartvizitId(string kartvizitid)
        {
            var paylasimlistesi = await paylasimRepository.GetByKartvizitId(kartvizitid);
            return Ok(paylasimlistesi);
        }

        // POST api/yeni-birim-ekleme
        [HttpPost("yeni-paylasim-ekleme")]
        public IActionResult Post([FromBody] PAYLASIM paylasim)
        {
            paylasim.PAYLASIMISTEKTARIH = DateTime.Now;
            var result = paylasimRepository.CreatePaylasim(paylasim);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // PUT api/<BirimController>/5
        [HttpPut("paylasim-guncelleme")]
        public IActionResult Put([FromBody] PAYLASIM paylasim)
        {
            var currentDateTime = DateTime.Now;
            if(paylasim.AKTIFMI == true & (currentDateTime >= paylasim.PAYLASIMISTEKTARIH.AddHours(paylasim.PAYLASIMSURE)))
            {
                paylasim.AKTIFMI = false;
                paylasim.BITTIMI = true;
                var result = paylasimRepository.UpdatePaylasim(paylasim);
                if (result)
                {
                    return Ok("Başarılı");
                }
                return BadRequest("Başarısız");
            }
            else if(paylasim.AKTIFMI == true && (currentDateTime < paylasim.PAYLASIMISTEKTARIH.AddHours(paylasim.PAYLASIMSURE)))
            {
                paylasim.AKTIFMI = true;
                paylasim.BITTIMI = false;
                var result = paylasimRepository.UpdatePaylasim(paylasim);
                if (result)
                {
                    return Ok("Başarılı");
                }
                return BadRequest("Başarısız");
            }
            else if(paylasim.AKTIFMI == false && (currentDateTime >= paylasim.PAYLASIMISTEKTARIH.AddHours(paylasim.PAYLASIMSURE)))
            {
                paylasim.AKTIFMI = false;
                paylasim.BITTIMI = true;
                var result = paylasimRepository.UpdatePaylasim(paylasim);
                if (result)
                {
                    return Ok("Başarılı");
                }
                return BadRequest("Başarısız");

            }
            else
            {
                paylasim.AKTIFMI = false;
                paylasim.BITTIMI = true;
                var result = paylasimRepository.UpdatePaylasim(paylasim);
                if (result)
                {
                    return Ok("Başarılı");
                }
                return BadRequest("Başarısız");
            }

            
        }

    }
}
