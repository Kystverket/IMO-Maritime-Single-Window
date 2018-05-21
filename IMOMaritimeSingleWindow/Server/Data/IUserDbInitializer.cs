using System.Threading;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Helpers;

namespace IMOMaritimeSingleWindow.Data
{
    public interface IUserDbInitializer
    {
        SeedItems SeedItems { get; set; }

        void Dispose();
        Task EnsureSeeded();
        Task SeedAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}
