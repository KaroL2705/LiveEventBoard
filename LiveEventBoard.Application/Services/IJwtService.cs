using LiveEventBoard.Core.Models;

public interface IJwtService
{
    string GenerateToken(User user);
}