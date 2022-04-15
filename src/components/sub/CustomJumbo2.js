import React from 'react';

// text=""
// backgroundImage=""

const CustomJumbo2 = (props) => {
  return (
    <header
        style={{
            // backgroundImage: `${props.backgroundImage}`,
            // background: 'rgb(0,0,0)',
            // background: 'linearGradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%)',
            backgroundColor: 'grey',
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '0',
            padding: '0',
            margin: '0',
        }}
    >
        <h1
            style={{
                position: 'relative',
                textAlign: 'center',
                color: 'white',
                // top: '0',
                bottom: '-90px',
                background: 'rgb(255,255,255)',
                background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%)',
                padding: '0',
                margin: '0',
            }}
        >
            { props.text }
        </h1>
    </header>
  )
}

export default CustomJumbo2;