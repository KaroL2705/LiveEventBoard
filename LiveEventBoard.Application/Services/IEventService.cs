using LiveEventBoard.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LiveEventBoard.Application.Services
{
    public interface IEventService
    {
        Task<IEnumerable<Event>> GetEventsAsync();
        Task<Event> GetEventAsync(int id);
        Task AddEventAsync(Event ev);
    }
}