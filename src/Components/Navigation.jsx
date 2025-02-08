import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';
import AddGameBox from './AddGameBox.jsx';
import SearchBar from './SearchBar.jsx';

function Navigation({ onSearch }) {
    const location = useLocation();

    const renderButton = (to, label, variant, alwaysInactive = false) => (
        <NavLink to={to}>
            <Button variant={variant} active={!alwaysInactive && location.pathname === to}>
                {label}
            </Button>
        </NavLink>
    );

    return (
        <Navbar className="gap-2 ps-2 d-flex align-items-center">
            <div className="d-flex gap-2 flex-nowrap">
                {renderButton("/", "All Games", "light", true)}
                {renderButton("/auburnkebabs", "Auburn Kebabs", "outline-primary")}
                {renderButton("/newjeanselite", "NewJeans Elite", "outline-success")}
                {renderButton("/leteam", "LeTeam", "outline-info")}
            </div>

            <div className="ms-auto d-flex gap-2 align-items-center">
                <SearchBar onSearch={(e) => onSearch(e.target.value)} />
                <AddGameBox />
            </div>
        </Navbar>
    );
}

export default Navigation;
