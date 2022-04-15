import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

// text=""
// backgroundImage=""

const CustomJumbo = (props) => {
  return (
    <Jumbotron
        style={{
            backgroundImage: `${props.backgroundImage}`,
            // background: `rgb(255,255,255)`,
            background: `linearGradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0) 100%)`,
            width: '100%',
            borderRadius: '0',
        }}
    >
        <span
            style={{
                position: 'relative',
                display: 'block',
                margin: '0 auto',
            }}
        >
            { props.text }
        </span>
    </Jumbotron>
  )
}

export default CustomJumbo;