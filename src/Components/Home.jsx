import React, { useEffect, useState } from "react";
import GameBubble from "./GameBubble.jsx";
import { Container } from "react-bootstrap";

function Home() {

    const [data, setData] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

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

export default Home;