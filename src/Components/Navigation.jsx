import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';
import AddGameBox from './AddGameBox.jsx'

function Navigation() {
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
            <div className="d-flex gap-2">
                {renderButton("/", "All Games", "light", true)}
                {renderButton("/ak", "Auburn Kebabs", "outline-primary")}
                {renderButton("/nje", "NewJeans Elite", "outline-success")}
                {renderButton("/lt", "LeTeam", "outline-info")}
            </div>
            <AddGameBox />
        </Navbar>
    );
}

export default Navigation;