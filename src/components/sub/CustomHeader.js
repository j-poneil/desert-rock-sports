import React from 'react';

// import Container from 'react-bootstrap/Container';

// text=""
// bgImg=""

//! the className thing is for experimental effect to get a more interesting bottom edge effect
// it ties into _layout_containers.sass

const CustomHeader = (props) => {
  return (
    <header
        className='customHeader'
        style={{
            backgroundImage: `
                linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 100%),
                url(${props.bgImg})
            `,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            objectFit: 'cover',
            width: '100%',
            // 20vh is what I had originally, but for the image of Barnacle w/ goggles, on 1920x1080 laptop... around 40vh looks better
            //! I should just code an optional prop to use custom vh... but default to 20vh
            // and/or make these headers default to different vh for different screen sizes
            height: '20vh',
            borderRadius: '0',
            padding: '0',
            margin: '0',
            position: 'relative',
            // 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}
    >
        <h1
            style={{
                position: 'relative',
                color: 'white',
                textAlign: 'center',
                maxWidth: '992px',
            }}
        >
            { props.text }
        </h1>
    </header>
  )
}

export default CustomHeader;