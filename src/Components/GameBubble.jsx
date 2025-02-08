import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function GameBubble({ game }) {
    const gameId = game.game_id
    const t1 = game.team1;
    const t2 = game.team2;
    const date = new Date(game.date).toLocaleDateString()
    const youtubeLink = game.youtube_link
    const score = game.score

    const getYouTubeThumbnail = (url) => {
        const match = url.match(/embed\/([^/?]+)/);
        if (match) {
            const videoId = match[1];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return null;
    };

    const [thumbnailUrl, setThumbnailUrl] = useState(getYouTubeThumbnail(youtubeLink));

    useEffect(() => {
        setThumbnailUrl(getYouTubeThumbnail(youtubeLink));
    }, [youtubeLink]);

    return (
        <Container>
            <Link to={`/game/${gameId}`} style={{ textDecoration: 'none' }}>
                <Container style={{
                    border: '2px solid #D3D3D3',
                    borderRadius: '30px'
                }}
                    className="d-flex gap-5 px-5 py-3 my-3">

                    <img src={thumbnailUrl} alt="" style={{
                        width: '30%',
                        height: 'auto',
                        maxHeight: '120px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }} />


                    <Container
                        className="d-flex flex-column justify-content-center"
                    >
                        <div className="game-title h3 mb-0" style={{ color: 'black' }}>{t1.toUpperCase()} vs {t2.toUpperCase()}</div>
                        <div className="game-date text-muted">{date}</div>
                    </Container>

                    <div
                        className="score h3 mb-0 d-flex align-items-center"
                        style={{
                            color: 'black',
                            whiteSpace: 'nowrap',
                            marginLeft: 'auto'
                        }}
                    >
                        {score}
                    </div>
                </Container >

            </Link >
        </Container>

    );
}

export default GameBubble;

