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
    public class BirimController : ControllerBase
    {
        private IBirimRepository birimRepository;
        public BirimController(IBirimRepository birimRepo)
        {
            birimRepository = birimRepo;
        }

        // GET: api/birimler
        [HttpGet("butun-birimler")]
        public async Task<IActionResult> Get()
        {
            var birimListesi = await birimRepository.GetList();
            return Ok(birimListesi);
        }

        // GET: api/birimler/kurumid
        [HttpGet("kurum-id-butun-birimler")]
        public async Task<IActionResult> GetList(string kurumid)
        {
            var birimListesi = await birimRepository.GetList(kurumid);
            return Ok(birimListesi);
        }

        // GET: api/id-ile-birim-bulma/id
        [HttpGet("id-ile-birim-bulma/id")]
        public IActionResult GetBirimById(string id)
        {
            var birim = birimRepository.GetById(id);
            return Ok(birim);
        }

        // GET api/ad-ile-birim-bulma/ad
        [HttpGet("ad-ile-birim-bulma/ad")]
        public IActionResult GetBirimByAdi(string ad)
        {
            var birim = birimRepository.GetByAdi(ad);
            return Ok(birim);
        }

        // GET api/kurumid-ile-birim-bulma/kurumid
        [HttpGet("kurumid-ile-birim-bulma/kurumid")]
        public IActionResult GetByKurumId(string kurumid)
        {
            var birim = birimRepository.GetByKurumId(kurumid);
            return Ok(birim);
        }

        // POST api/yeni-birim-ekleme
        [HttpPost("yeni-birim-ekleme")]
        public IActionResult Post([FromBody] BIRIM birim)
        {
            var result = birimRepository.CreateBirim(birim);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // PUT api/<BirimController>/5
        [HttpPut("birim-güncelleme")]
        public IActionResult Put([FromBody] BIRIM birim)
        {
            var result = birimRepository.UpdateBirim(birim);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // DELETE api/birim-silme
        [HttpDelete("birim-silme")]
        public IActionResult Delete(string id)
        {
            var birim = birimRepository.GetById(id);
            var result = birimRepository.DeleteBirim(birim);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }
    }
}
