using LiveEventBoard.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LiveEventBoard.Infrastructure.Repositories
{
    public interface IEventRepository
    {
        Task<IEnumerable<Event>> GetAllAsync();
        Task<Event> GetByIdAsync(int id);
        Task AddAsync(Event ev);
    }
}