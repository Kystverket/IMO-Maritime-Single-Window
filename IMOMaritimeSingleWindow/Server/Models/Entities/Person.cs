

namespace IMOMaritimeSingleWindow.Models.Entities
{
    public class Person
    {
        public int Id { get; set; }
        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }  // navigation property
    }
}
