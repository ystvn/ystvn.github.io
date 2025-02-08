import './App.css';
import Navigation from './Components/Navigation.jsx';
import Team from './Components/Team.jsx';
import ViewingGames from './Components/ViewingGames.jsx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    return (
        <Router>
            <Navigation onSearch={handleSearch} />
            <Routes>
                <Route path="/:team?" element={<Team searchQuery={searchQuery} />} />
                <Route path="/game/:gameId" element={<ViewingGames />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
