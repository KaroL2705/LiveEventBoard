using LiveEventBoard.Core.Models;
using LiveEventBoard.Infrastructure.Repositories;

namespace LiveEventBoard.Application.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _repository;

        public EventService(IEventRepository repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<Event>> GetEventsAsync() => _repository.GetAllAsync();
        public Task<Event> GetEventAsync(int id) => _repository.GetByIdAsync(id);
        public Task AddEventAsync(Event ev) => _repository.AddAsync(ev);
    }
}