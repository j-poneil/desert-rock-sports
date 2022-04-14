import React from 'react';
// import { Link } from 'react-router-dom';

// ! - The external link icon definitely looks out of place. May have to remove.
// ! - The tooltip shows up too slowly to be useful... and doesn't show with tab-through navigation or on touchscreen, probably
import { FaExternalLinkAlt } from 'react-icons/fa';

// % Secret Door icon for hidden gallery / whatever
// import { GiSecretDoor } from 'react-icons/gi';

// ! currently disabled these styles, just using the react-bootstrap default ones
// styles here:
// src\stylesheets\layout\_navbar.sass

// Just calling react-bootstraps 'Navbar' as 'NavbarRBS' to avoid having to rename stuff elsewhere
import NavbarRBS from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



// ? fixed="top" in the NavbarRBS could be nice. BUT it would mean needing to add padding-top to the Switch or something to prevent it from cutting off the top content of all pages... so will go w/o for now.
//! variant NOT varient GAH!
export default function Navbar(){
    return (
        <NavbarRBS
            collapseOnSelect
            expand="lg"
            // bg="light"
            // variant="light"
            bg="dark"
            variant="dark"
            role="navigation"
            aria-label='Navigation Menu'
            fixed='top'
        >
            <NavbarRBS.Brand href="/" varient="light">
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
                    <Nav.Link href="/gear">Gear</Nav.Link>
                    <Nav.Link href="/beta">Beta</Nav.Link>
                    <Nav.Link href="/weather">Weather</Nav.Link>
                    {/* <Nav.Link href="https://www.redrockclimbingcenter.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Opens in a new tab">Gym <sup><FaExternalLinkAlt /></sup></Nav.Link> */}
                    <Nav.Link href="/guiding">Guiding</Nav.Link>
                    <Nav.Link href="/resoles">Resoles</Nav.Link>
                    {/* <Nav.Link href="/other">Other</Nav.Link> */}
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    {/* <Nav.Link href="/secret"><GiSecretDoor /></Nav.Link> */}
                    {/* Insert new navbar items above, like so: */}
                    {/* <Nav.Link href="/pagetolinkto">Page</Nav.Link> */}
                    {/* If it is a link to another site and you want to open it in a new tab do like so: */}
                    {/* <Nav.Link href="https://www.redrockclimbingcenter.com/" target="_blank">Gym</Nav.Link> */}
                </Nav>
            </NavbarRBS.Collapse>
        </NavbarRBS>
    );
}