import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('events').EventEmitter.defaultMaxListeners = 1500;

// Import CSS here+
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
