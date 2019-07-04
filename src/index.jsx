import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import './main.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
