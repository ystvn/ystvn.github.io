import React, { useState, useEffect } from 'react';
import GameBubble from './GameBubble';
import { Container } from 'react-bootstrap';

function TeamView({ team, searchQuery }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://stevens-games.onrender.com/${team}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [team]);

    const filteredGames = data?.games?.filter((game) =>
        game.team2.toLowerCase().includes(searchQuery)
    );

    if (!data) {
        return <Container>Loading...</Container>;
    }

    return (
        <div>
            {filteredGames && filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                    <GameBubble
                        key={game.game_id}
                        t1={game.team1}
                        t2={game.team2}
                        date={new Date(game.date).toLocaleDateString()}
                        gameId={game.game_id}
                        youtubeLink={game.youtube_link}
                    />
                ))
            ) : (
                <Container>No games found.</Container>
            )}
        </div>
    );
}

export default TeamView;
