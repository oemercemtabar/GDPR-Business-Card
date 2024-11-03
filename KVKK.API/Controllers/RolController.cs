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
    public class RolController : ControllerBase
    {
        private IRolRepository rolRepository;
        public RolController(IRolRepository rolRepo)
        {
            rolRepository = rolRepo;
        }

        [HttpGet("butun-roller")]
        public async Task<IActionResult> Get()
        {
            var rollistesi = await rolRepository.GetList();
            return Ok(rollistesi);
        }

        // GET api/ROL/{id}/5
        [HttpGet("id-ile-rol-bulma/id")]
        public IActionResult GetRolById(string id)
        {
            var rol = rolRepository.GetById(id);
            return Ok(rol);
        }

        // GET api/ROL/{ad}
        [HttpGet("ad-ile-rol-bulma/ad")]
        public IActionResult GetRolByAd(string ad)
        {
            var rol = rolRepository.GetByAd(ad);
            return Ok(rol);
        }


        [HttpPost("yeni-rol-ekleme")]
        public IActionResult Post([FromBody] ROL rol)
        {
            var result = rolRepository.CreateRol(rol);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // PUT api/<RolController>/5
        [HttpPut("rol-guncelleme")]
        public IActionResult Put([FromBody] ROL rol)
        {
            var result = rolRepository.UpdateRol(rol);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }

        // DELETE api/<RolController>/5
        [HttpDelete("rol-silme")]
        public IActionResult Delete(string id)
        {
            var kurum = rolRepository.GetById(id);
            var result = rolRepository.DeleteRol(kurum);
            if (result)
            {
                return Ok("Başarılı");
            }

            return BadRequest("Başarısız");
        }
    
    }
}
