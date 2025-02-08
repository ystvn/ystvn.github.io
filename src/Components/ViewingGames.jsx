import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function GameView() {
    const { gameId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://stevens-games.onrender.com/game/${gameId}`)
            .then(res => res.json())
            .then(data => {
                if (data.game) {
                    setData(data.game);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [gameId]);

    if (!data) {
        return <Container>Loading...</Container>;
    }

    return <div>
        <Container className="pt-4">
            <h3>{data.team1} vs {data.team2}</h3>
            <h5>{new Date(data.g_date).toLocaleDateString()}</h5>
            <div className="ratio ratio-16x9">
                <iframe
                    src={data.youtube_link}
                    title={data[1] + ' ' + data[2]}
                    allowFullScreen
                ></iframe>
            </div>
        </Container>
    </div>


}

export default GameView;