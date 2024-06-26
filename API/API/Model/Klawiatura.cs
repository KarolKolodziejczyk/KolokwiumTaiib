namespace API.Model
{
    public enum Typ
    {
        membranowa =1 ,
        nożycowa =2 ,
        mechaniczna = 3,
        optyczna = 4,
        hybrydowa = 5
    }
    public class Klawiatura
    {
        public int Id { get; set; }
        public string model { get; set; }
        public Typ typ { get; set; }
    }
}
