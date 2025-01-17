import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function GameBubble({ t1, t2, date, gameId, youtubeLink }) {

    const getYouTubeThumbnail = (url) => {
        const match = url.match(/embed\/([^/?]+)/);
        if (match) {
            const videoId = match[1];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return null;
    };

    const [thumbnailUrl] = useState(getYouTubeThumbnail(youtubeLink));

    return (
        <Container>
            <Link to={`/game/${gameId}`} style={{ textDecoration: 'none' }}>
                <Container style={{
                    border: '2px solid #D3D3D3',
                    borderRadius: '30px'
                }}
                    className="d-flex gap-5 px-5 py-3 my-3">

                    <img src={thumbnailUrl} alt="" style={{
                        width: '200px',
                        height: 'auto',
                        maxHeight: '112px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }} />


                    <Container
                        className="d-flex flex-column justify-content-center"
                    >
                        <div className="game-title h3 mb-0" style={{ color: 'black' }}>{t1.toUpperCase()} vs {t2.toUpperCase()}</div>
                        <div className="game-date text-muted">{date}</div>
                    </Container>
                </Container >

            </Link >
        </Container>

    );
}

export default GameBubble;

