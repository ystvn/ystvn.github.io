import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import AddGameBox from './AddGameBox.jsx';
import SearchBar from './SearchBar.jsx';

function Navigation({ onSearch }) {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    const renderButton = (to, label, variant, alwaysInactive = false) => (
        <NavLink to={to} style={{ textDecoration: 'none' }}>
            <Button
                variant={variant}
                active={!alwaysInactive && location.pathname === to}
                onClick={() => setExpanded(false)}
            >
                {label}
            </Button>
        </NavLink>
    );

    return (
        <Navbar expand="lg" collapseOnSelect className="bg-body-tertiary" expanded={expanded}>
            <Container fluid className="d-flex align-items-start justify-content-between">
                <div>
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        onClick={() => setExpanded(!expanded)}
                    />

                    <Navbar.Collapse id="navbar-nav" className="mt-2 mt-lg-0">
                        <Nav className="d-flex gap-2 flex-column flex-lg-row">
                            {renderButton("/", "All Games", "light", true)}
                            {renderButton("/auburnkebabs", "Auburn Kebabs", "outline-primary")}
                            {renderButton("/newjeanselite", "NewJeans Elite", "outline-success")}
                            {renderButton("/leteam", "LeTeam", "outline-info")}
                        </Nav>
                    </Navbar.Collapse>
                </div>

                <div className="d-flex align-items-start">
                    <div className="d-flex gap-2">
                        <SearchBar onSearch={(e) => onSearch(e.target.value)} />
                        <AddGameBox />
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default Navigation;
