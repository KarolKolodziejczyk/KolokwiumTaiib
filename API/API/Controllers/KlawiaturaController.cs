using API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlawiaturaController : Controller
    {
        public IKlawiaturaService KlawiaturaService { get; set; }
        public KlawiaturaController(IKlawiaturaService klawiaturaService)
        {
            KlawiaturaService = klawiaturaService;
        }

        [HttpDelete("{id}")]
        public void UsunKlawiature(int id)
        {
            KlawiaturaService.usunKlawiature(id);
        }

        [HttpPost]
        public void DodajKlawiature([FromBody] KlawiaturaDTO klawiatura)
        {
             KlawiaturaService.dodajKlawiature(klawiatura);

        }
        [HttpGet]
        public List<Klawiatura> GetKlawiatury()
        {
            return KlawiaturaService.GetKlawiatury();

        }

    }
}
