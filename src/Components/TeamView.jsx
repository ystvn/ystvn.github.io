import React, { useState, useEffect } from 'react';
import GameBubble from './GameBubble';
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

function TeamView({ searchQuery }) {
    const { team = "" } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const cachedData = localStorage.getItem(`team-${team}`);

        if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
        }
        fetch(`https://stevens-games.onrender.com/${team}`)
            .then((res) => res.json())
            .then((fetchedData) => {
                localStorage.setItem(`team-${team}`, JSON.stringify(fetchedData));
                setData(fetchedData);
            })
            .catch((error) => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));

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
                    <GameBubble game={game} />
                ))
            ) : (
                <Container>No games found.</Container>
            )}
        </div>
    );
}

export default TeamView;
