import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function GameBubble({ t1, t2, date, gameId }) {

    return (
        <Link to={`/game/${gameId}`} style={{ textDecoration: 'none' }}>
            <Container
                style={{
                    cursor: 'pointer',
                    border: '2px solid black' // Change 'red' to your desired color
                }}
                className="d-flex flex-column rounded-pill gap-3 px-5 py-3 my-3"
            >
                <div className="game-title h5 mb-0" style={{ color: 'black' }}>{t1} vs {t2}</div>
                <div className="game-date text-muted">{date}</div>
            </Container>
        </Link>
    );
}

export default GameBubble;