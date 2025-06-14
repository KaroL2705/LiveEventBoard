using LiveEventBoard.API.Hubs;
using LiveEventBoard.Application.Dto;
using LiveEventBoard.Application.Services;
using LiveEventBoard.Core.Models;
using LiveEventBoard.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace LiveEventBoard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _service;
        private readonly IHubContext<EventHub> _hubContext;
        private readonly AppDbContext _context;


        public EventsController(IEventService service, IHubContext<EventHub> hubContext, AppDbContext context)
        {
            _service = service;
            _hubContext = hubContext;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get() => Ok(await _service.GetEventsAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var ev = await _service.GetEventAsync(id);
            if (ev == null) return NotFound();
            return Ok(ev);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post(Event ev)
        {
            await _hubContext.Clients.All.SendAsync("EventAdded", ev);
            await _service.AddEventAsync(ev);
            return Ok(ev);
        }
        
        [HttpPost("comments")]
        public async Task<IActionResult> AddComment([FromBody] CommentDto commentDto)
        {
            if (commentDto == null)
                return BadRequest();

            var comment = new Comment
            {
                Message = commentDto.Message,
                Author = commentDto.Author,
                EventId = commentDto.EventId
            };

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return Ok(comment);
        }
    }
}