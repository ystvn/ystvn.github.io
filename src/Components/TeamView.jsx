import React, { useState, useEffect } from 'react';
import GameBubble from './GameBubble';
import { Container } from 'react-bootstrap';

function TeamView({ team, searchQuery }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cachedData = localStorage.getItem(`team-${team}`);

        if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
        } else {
            setLoading(true);
            fetch(`https://stevens-games.onrender.com/${team}`)
                .then((res) => res.json())
                .then((fetchedData) => {
                    localStorage.setItem(`team-${team}`, JSON.stringify(fetchedData));
                    setData(fetchedData);
                })
                .catch((error) => console.error('Error fetching data:', error))
                .finally(() => setLoading(false));
        }
    }, [team]);

    const filteredGames = data?.games?.filter((game) =>
        game.team2.toLowerCase().includes(searchQuery)
    );

    if (loading) {
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
