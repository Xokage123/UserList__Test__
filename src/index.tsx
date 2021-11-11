import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ID_APP = 'root';

const appELement = document.getElementById(ID_APP)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appELement
);

reportWebVitals();
