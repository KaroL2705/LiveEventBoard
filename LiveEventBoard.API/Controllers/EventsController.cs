using LiveEventBoard.Application.Services;
using LiveEventBoard.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LiveEventBoard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _service;

        public EventsController(IEventService service)
        {
            _service = service;
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
            await _service.AddEventAsync(ev);
            return Ok(ev);
        }
    }
}