import React from 'react';
import { Switch, Route } from 'react-router-dom';

// imported it into stylesheets/main.scss instead, which is imported into index.js
// import 'bootstrap/dist/css/bootstrap.min.css'; // ! --- REACT-BOOTSTRAP
//import logo from './logo.svg';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Gear from './components/Gear';
import Beta from './components/Beta';
import Guiding from './components/Guiding';
import Resoles from './components/RRResoles';
import Other from './components/Other';
import About from './components/About';
import Shop from './components/Shop';
// import new pages above using the same format
// import Page from './components/Page';
import Secret from './components/Secret';
import Error from './components/Error';


// overall background photo
import dead_tree_med from './img/BackgroundImages/dead_tree_med.jpg';
import rope_med from './img/BackgroundImages/rope_med.jpg';
import plumbers_med from './img/BackgroundImages/plumbers_med.jpg';
import skyline_med from './img/BackgroundImages/skyline_med.jpg';
import sandstone_texture_med from './img/BackgroundImages/sandstone_texture_med.jpg';

// background styling
const backgroundStyles = {
  backgroundImage: `url(${ sandstone_texture_med })`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

function App() {
  return (
    // style={ backgroundStyles }
    <div>
      {/* //@ test to make sure this works... if I remove sr-only, it is visible */}
      <a id='skip-nav' class="sr-only sr-only-focusable" href='#main-content'>Skip Navigation</a>


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
