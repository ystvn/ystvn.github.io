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
        <Container className="my-2">
            <Link to={`/game/${gameId}`} style={{ textDecoration: 'none' }}>
                <Container
                    style={{
                        border: '2px solid #D3D3D3',
                        borderRadius: '30px',
                        display: 'flex',
                        gap: '3rem',
                        padding: '2rem',
                        alignItems: 'center',
                    }}
                >
                    <img
                        className="game-thumbnail"
                        src={thumbnailUrl}
                        alt=""
                        style={{
                            width: '50%',
                            height: 'auto',
                            maxHeight: '120px',
                            maxWidth: '220px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                        }}
                    />

                    <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div
                            className="game-teams"
                            style={{
                                fontSize: '2rem',  // Default font size
                                color: 'black',
                            }}
                        >
                            {t1.toUpperCase()} vs {t2.toUpperCase()}
                        </div>

                        <div style={{ color: '#6c757d' }}>{date}</div>
                    </Container>

                    <div
                        style={{
                            fontSize: '1.5rem',
                            color: 'black',
                            whiteSpace: 'nowrap',
                            marginLeft: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            paddingRight: '1rem',
                        }}
                    >
                        {score !== 'N/A' && (() => {
                            const [a, b] = score.split(' - ').map(Number);
                            if (!isNaN(a) && !isNaN(b)) {
                                const isWin = a > b;
                                return (
                                    <span
                                        style={{
                                            color: isWin ? 'green' : 'red',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {isWin ? 'W' : 'L'}
                                    </span>
                                );
                            }
                            return null;
                        })()}
                        <span>{score}</span>
                    </div>
                </Container>
            </Link>

            <style jsx>{`
                @media (max-width: 750px) {
                    .game-thumbnail {
                        display: none; /* Hide thumbnail below 800px */
                    }

                }

                @media (max-width: 750px) {
                    .game-teams {
                        font-size: 1.24em !important; /* Smaller font size for screens below 550px */
                    }
                }
            `}</style>
        </Container>

    );
}

export default GameBubble;

