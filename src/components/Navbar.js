import React from 'react';
import { Link } from 'react-router-dom';

// styles here:
// src\stylesheets\layout\_navbar.sass

// Just calling react-bootstraps 'Navbar' as 'NavbarRBS'
import NavbarRBS from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function Navbar(){
    return (
        <NavbarRBS expand="lg" bg="dark" varient="dark">
            <NavbarRBS.Brand href="/">Desert Rock Sports</NavbarRBS.Brand> {/* //! will this work? */}
            <NavbarRBS.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarRBS.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Link to="/about">About</Link></Nav.Item>
                    <Nav.Item><Link to="/gear">Gear</Link></Nav.Item>
                    <Nav.Item><Link to="/beta">Beta</Link></Nav.Item>
                    <Nav.Item><Link to="/guiding">Guiding</Link></Nav.Item>
                    <Nav.Item><Link to="/other">Other</Link></Nav.Item>
                    <Nav.Item><Link to="/shop">Shop</Link></Nav.Item>
                    <Nav.Item><Link to="/secret">Secret</Link></Nav.Item>
                    {/* Insert new navbar items above */}
                    {/* <Nav.Item><Link to="/pagetolinkto">Page</Link></Nav.Item> */}
                </Nav>
            </NavbarRBS.Collapse>
        </NavbarRBS>

        // Previous way, w/o react-bootstrap, just with react-router
        // <nav>
        //     <ul id="navbar-list">
        //         <li className="nav-item"><Link to="/">Home</Link></li>
        //         <li className="nav-item"><Link to="/about">About</Link></li>
        //         <li className="nav-item"><Link to="/gear">Gear</Link></li>
        //         <li className="nav-item"><Link to="/beta">Beta</Link></li>
        //         <li className="nav-item"><Link to="/guiding">Guiding</Link></li>
        //         <li className="nav-item"><Link to="/other">Other</Link></li>
        //         <li className="nav-item"><Link to="/shop">Shop</Link></li>
        //         <li className="nav-item"><Link to="/secret">.</Link></li>
        //         {/* Insert new navbar items above */}
        //         {/* <li className="nav-item"><Link to="/pagetolinkto">Page</Link></li> */}
        //     </ul>
        // </nav>
    );
}