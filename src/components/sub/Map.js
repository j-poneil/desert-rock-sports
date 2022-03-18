import React from 'react';

// Embedded Google Map, somewhat responsive
// stylesheets/components/_mapresponsive.sass
export default function Map(){
    return (
        <div className="map-responsive">
            <iframe 
            title="Desert Rock Sports on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3254788410204!2d-115.27433738477056!3d36.15863358008578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0862fa5e5db%3A0xd676d93e04e64a4d!2sDesert%20Rock%20Sports!5e0!3m2!1sen!2sus!4v1586033933925!5m2!1sen!2sus" width="600" 
            height="450" 
            frameBorder="0" 
            style={{border:0}} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"></iframe>
        </div>
    );
}