using API.Model;
using Microsoft.AspNetCore.Mvc;

namespace API
{
    public class KlawiaturaService : IKlawiaturaService
    {

        int licznikId = 0;
        private static List<Klawiatura> klawiatury = new List<Klawiatura>
            {
                new Klawiatura { Id = 1, model = "A", typ = Typ.optyczna },
                new Klawiatura { Id = 2, model = "B", typ = Typ.hybrydowa  },
                new Klawiatura { Id = 3, model = "C", typ = Typ.nożycowa  },
                new Klawiatura { Id = 4, model = "D", typ = Typ.membranowa  },
                new Klawiatura { Id = 5, model = "E", typ = Typ.mechaniczna  }
            };

        public void dodajKlawiature(KlawiaturaDTO klawiatura)
        {
            licznikId = klawiatury.Count;
            klawiatury.Add(new Klawiatura { Id= ++licznikId, model = klawiatura.model, typ= klawiatura.typ});
        }

        public List<Klawiatura> GetKlawiatury()
        {
            return klawiatury;
        }

        public void usunKlawiature(int id)
        {
            klawiatury.RemoveAt(id);
        }
    }
}
