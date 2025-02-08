import GameBubble from './GameBubble';
import { Container } from 'react-bootstrap';

function TeamView({ searchQuery, teamData }) {
    const data = teamData

    const filteredGames = data?.filter((game) =>
        game.team2.toLowerCase().includes(searchQuery)
    );
    return (
        <div>
            {filteredGames && filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                    <GameBubble key={game.game_id} game={game} />
                ))
            ) : (
                <Container>No games found.</Container>
            )}
        </div>
    );
}

export default TeamView;
