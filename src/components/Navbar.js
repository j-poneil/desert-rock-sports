import React from 'react';
import { Link } from 'react-router-dom';

// % Secret Door icon for hidden gallery / whatever
import { GiSecretDoor } from 'react-icons/gi';

// ! currently disabled these styles, just using the react-bootstrap default ones
// styles here:
// src\stylesheets\layout\_navbar.sass

// Just calling react-bootstraps 'Navbar' as 'NavbarRBS' to avoid having to rename stuff elsewhere
import NavbarRBS from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// ? fixed="top" in the NavbarRBS could be nice. BUT it would mean needing to add padding-top to the Switch or something to prevent it from cutting off the top content of all pages... so will go w/o for now.
export default function Navbar(){
    return (
        <NavbarRBS collapseOnSelect expand="lg" bg="light" varient="light" role="navigation">
            <NavbarRBS.Brand href="/">
                {/* <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Desert Rock Sports Logo"
                />{' '} */}
                Desert Rock Sports
            </NavbarRBS.Brand>
            <NavbarRBS.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarRBS.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto"> 
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/gear">Gear</Nav.Link>
                    <Nav.Link href="/beta">Beta</Nav.Link>
                    <Nav.Link href="https://www.redrockclimbingcenter.com/" target="_blank">Gym</Nav.Link>
                    <Nav.Link href="/guiding">Guiding</Nav.Link>
                    <Nav.Link href="/other">Other</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/secret"><GiSecretDoor /></Nav.Link>
                    {/* Insert new navbar items above, like so: */}
                    {/* <Nav.Link href="/pagetolinkto">Page</Nav.Link> */}
                    {/* If it is a link to another site and you want to open it in a new tab do like so: */}
                    {/* <Nav.Link href="https://www.redrockclimbingcenter.com/" target="_blank">Gym</Nav.Link> */}
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