import React from 'react';
import TheVerm from '../img/secret/the_verm.jpg';

// styles here:
// src\stylesheets\pages\_secret.sass


// Idea is to have a hidden page with climbing memes, tributes, and whatever else. Probably flexbox and overflow wrap. Would be nice to have it auto populate using images that are placed into a folder, doing auto resize so they try to use original img size up to a certain max.
// ... but yeah, that doesn't matter. This page doesn't matter.
export default function Secret(){
    return (
        <div className="secret-flex-container">
            <img src={TheVerm} className="secret-flex-item" alt="the verm" />
        </div>
    );
}