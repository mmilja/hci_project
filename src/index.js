'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App.js';


ReactDOM.render(<App />,document.getElementById('main'));

if (module.hot) module.hot.accept();

registerServiceWorker();
