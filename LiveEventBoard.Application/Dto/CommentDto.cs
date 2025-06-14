namespace LiveEventBoard.Application.Dto;
public class CommentDto
{
    public string Message { get; set; }
    public string Author { get; set; }
    public int EventId { get; set; }
}