import React, { useState, useEffect } from 'react';
import GameBubble from './GameBubble';
import { Container } from 'react-bootstrap';
// import { fetchData } from './Api';

function TeamView({ team }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://stevens-games.onrender.com/${team}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [team]);

    if (!data) {
        return <Container>Loading...</Container>;
    }

    return (
        <div>
            {data.games && data.games.length > 0 ? (
                data.games.map((game) => (
                    <GameBubble
                        key={game.game_id} // Use the game_id as the unique key
                        t1={game.team1} // Team 1 name
                        t2={game.team2} // Team 2 name
                        date={new Date(game.date).toLocaleDateString()} // Format the date
                        gameId={game.game_id} // Game ID
                        youtubeLink={game.youtube_link} // YouTube link
                    />
                ))
            ) : (
                <Container>No games found.</Container>
            )}
        </div>
    );
}

export default TeamView;
