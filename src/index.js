import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Master stylesheet compiled from SASS partials
//! including React-Bootstrap default styles, since they are imported into main.scss (the file everything is imported into before compiling)
//! Edit custom ones which override bootstrap defaults:
// * stylesheets/overrides/overrides.sass
import './stylesheets/main.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
