import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './assets/styles/style.sass';
import './assets/styles/style.css';

ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
), document.getElementById('root'));

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
