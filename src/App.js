import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // ! --- REACT-BOOTSTRAP
//import logo from './logo.svg';
//import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Gear from './components/Gear';
import Beta from './components/Beta';
import Guiding from './components/Guiding';
import Other from './components/Other';
import Shop from './components/Shop';
// import new pages above using the same format
// import Page from './components/Page';
import Secret from './components/Secret';
import Error from './components/Error';


function App() {
  return (
    <>
      {/* //@ test to make sure this works... if I remove sr-only, it is visible */}
      <a id='skip-nav' class="sr-only sr-only-focusable" href='#main-content'>Skip Navigation</a>


      {/* Navbar here */}
      <Navbar />

      {/* Switch is the container for all the other main page content, id="main-content" is for SR skip link*/}
      {/* since I have role="main" here I changed the overall enclosing tag from a main to a <>*/}
      <Switch id='main-content' role="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gear" component={Gear} />
        <Route path="/beta" component={Beta} />
        <Route path="/guiding" component={Guiding} />
        <Route path="/other" component={Other} />
        <Route path="/shop" component={Shop} />
        {/* Insert new pages above */}
        {/* <Route path="/page" component={Page} /> */}
        <Route path="/secret" component={Secret} />
        <Route component={Error} />
      </Switch>

      {/* Footer here //! DISABLED FOR NOW */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
