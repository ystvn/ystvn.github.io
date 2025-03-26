import { useEffect } from 'react';
import GameBubble from './GameBubble';
import { Container } from 'react-bootstrap';

function TeamView({ searchQuery, teamData }) {
    const data = teamData

    useEffect(() => {
        document.title = 'Steven\'s Game';
    }, []);

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
                <Container>
                    <h2>Games are currently loading... Please wait a moment while the server starts up. If no games appear, try refreshing the page in a minute.</h2>
                </Container>
            )}
        </div>
    );
}

export default TeamView;
