import React from 'react';
import { Switch, Route } from 'react-router-dom';

// imported it into stylesheets/main.scss instead, which is imported into index.js
// import 'bootstrap/dist/css/bootstrap.min.css'; // ! --- REACT-BOOTSTRAP
//import logo from './logo.svg';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import Home from './components/Home';
import Gear from './components/Gear';
import Beta from './components/Beta';
import Weather from './components/Weather';
import Guiding from './components/Guiding';
import Resoles from './components/RRResoles';
import Other from './components/Other';
import About from './components/About';
import Shop from './components/Shop';
// import new pages above using the same format
// import Page from './components/Page';
import Secret from './components/Secret';
import Error from './components/Error';


//! Overall site background
import Cactus from './img/Patterns/500x500_cactus2_black.svg';
const overallBackgroundStyles = {
  // backgroundImage: `url(${Cactus})`
  // cactus on top of original gradient:
  backgroundImage: `url(${Cactus}), linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,101,35,1) 0%, rgba(139,221,255,1) 100%)`,
  // original size is good, but 20% or 15% also looks good, maybe better... on laptop, on cell its too small...
  // backgroundSize: '20%',
  backgroundSize: '250px, 250px',
  minHeight: '100vh',
};

function App() {
  return (
    <div style={ overallBackgroundStyles }>
      {/* //@ test to make sure this works... if I remove sr-only, it is visible */}
      <a id='skip-nav' className="sr-only sr-only-focusable" href='#main-content'>Skip Navigation</a>


      {/* Navbar here */}
      <Navbar />

      {/* Hidden element, ONLY purpose is to make the mobile nav dropdown vs full screen nav be spaced properly */}
      <div style={{'height': '56px', 'width': '100%'}} aria-hidden />

      {/* Switch is the container for all the other main page content, id="main-content" is for SR skip link*/}
      {/* since I have role="main" here I changed the overall enclosing tag from a main to a <>*/}
      <Switch id='main-content' role="main">
        <Route exact path="/" component={Home} />
        
        <Route path="/gear" component={Gear} />
        <Route path="/beta" component={Beta} />
        <Route path="/weather" component={Weather} />
        <Route path="/guiding" component={Guiding} />
        <Route path="/resoles" component={Resoles} />
        <Route path="/other" component={Other} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        {/* Insert new pages above */}
        {/* <Route path="/page" component={Page} /> */}
        <Route path="/secret" component={Secret} />
        <Route component={Error} />
      </Switch>

      {/* Footer here //! DISABLED FOR NOW */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
