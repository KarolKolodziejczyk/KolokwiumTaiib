using API.Model;

namespace API
{
    public interface IKlawiaturaService
    {
        public void usunKlawiature(int id);
        public void dodajKlawiature(KlawiaturaDTO klawiatura);
        public List<Klawiatura> GetKlawiatury();
    }
}
