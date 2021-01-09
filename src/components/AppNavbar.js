import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './AppNavbar.css';
const AppNavbar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="active" to={'/'}>Home</Link>
                    <Link   to='/store'>User</Link>
                    <Link  to='/'>UserDetails</Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default AppNavbar;