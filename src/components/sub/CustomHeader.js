import React from 'react';

// text=""
// bgImg=""

const CustomHeader = (props) => {
  return (
    <header
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
            height: '20vh',
            borderRadius: '0',
            padding: '0',
            margin: '0',
            position: 'relative',
            // 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}
    >
        <h1
            style={{
                position: 'relative',
                color: 'white',
            }}
        >
            { props.text }
        </h1>
    </header>
  )
}

export default CustomHeader;