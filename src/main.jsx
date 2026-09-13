import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Opt into the scroll-reveal animation only now that JS is definitely running.
// Without this class every .reveal stays at its visible resting state, so a
// blocked script or a print job still shows the whole page.
document.documentElement.classList.add('js-reveal');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
