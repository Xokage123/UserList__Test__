import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import storeApp from './redux/srote';
import reportWebVitals from './reportWebVitals';

import App from './App';

const ID_APP = 'root';

const appELement = document.getElementById(ID_APP)

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={storeApp}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  appELement
);

reportWebVitals();
