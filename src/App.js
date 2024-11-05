import './App.css';
import Navigation from './Components/Navigation.jsx';
import TeamView from './Components/TeamView.jsx';
import GameView from './Components/GameView.jsx';
import Home from './Components/Home.jsx';
// import YearMenu from './Components/YearMenu.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/ak" element={<TeamView team="ak" />} />
        <Route path="/nje" element={<TeamView team="nje" />} />
        <Route path="/lt" element={<TeamView team="lt" />} />
        <Route path="/game/:gameId" element={<GameView />} />
      </Routes>
    </Router>
  );
}

export default App;
