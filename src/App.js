import './App.css';
import Navigation from './Components/Navigation.jsx';
import Team from './Components/Team.jsx';
import ViewingGames from './Components/ViewingGames.jsx';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [allGames, setAllGames] = useState([]);

    useEffect(() => {
        fetch("https://stevens-games.onrender.com/")
            .then((res) => res.json())
            .then((fetchedData) => {
                setAllGames(fetchedData.games);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    return (
        <Router>
            <Navigation onSearch={handleSearch} />
            <Routes>
                <Route path="/:team?" element={<Team searchQuery={searchQuery} allGames={allGames} />} />
                <Route path="/game/:gameId" element={<ViewingGames />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
