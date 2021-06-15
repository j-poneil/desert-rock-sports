import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav>
            {/*
            Plan is for on scrolling down, header gets hidden, but navbar
            sticks to the top of the page, maybe decreasing or changing style
            with some animation if it makes sense to do so...

            Infact, perhaps header and navbar will appear to be one, then change when scrolling down...
            */}
            <ul id="navbar-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/gear">Gear</Link></li>
                <li className="nav-item"><Link to="/beta">Beta</Link></li>
                <li className="nav-item"><Link to="/guiding">Guiding</Link></li>
                <li className="nav-item"><Link to="/other">Other</Link></li>
                <li className="nav-item"><Link to="/shop">Shop</Link></li>
                <li className="nav-item"><Link to="/secret">.</Link></li>
                {/* Insert new navbar items above */}
                {/* <li className="nav-item"><Link to="/pagetolinkto">Page</Link></li> */}
            </ul>
        </nav>
    );
}