using LiveEventBoard.Infrastructure.Repositories;
using LiveEventBoard.Core.Models;
using LiveEventBoard.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace LiveEventBoard.Infrastructure.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly AppDbContext _context;

        public EventRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Event>> GetAllAsync() => await _context.Events.Include(e => e.Comments).ToListAsync();
        public async Task<Event> GetByIdAsync(int id) => await _context.Events.Include(e => e.Comments).FirstOrDefaultAsync(e => e.Id == id);
        public async Task AddAsync(Event ev)
        {
            _context.Events.Add(ev);
            await _context.SaveChangesAsync();
        }
    }
}