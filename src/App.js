import './App.css';
import Navigation from './Components/Navigation.jsx';
import TeamView from './Components/TeamView.jsx';
import GameView from './Components/GameView.jsx';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    return (
        <Router>
            <Navigation onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<TeamView team="" searchQuery={searchQuery} />} />
                <Route path="/ak" element={<TeamView team="ak" searchQuery={searchQuery} />} />
                <Route path="/nje" element={<TeamView team="nje" searchQuery={searchQuery} />} />
                <Route path="/lt" element={<TeamView team="lt" searchQuery={searchQuery} />} />
                <Route path="/game/:gameId" element={<GameView />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
