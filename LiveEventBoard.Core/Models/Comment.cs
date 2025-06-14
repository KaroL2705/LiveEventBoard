namespace LiveEventBoard.Core.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public string Author { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}