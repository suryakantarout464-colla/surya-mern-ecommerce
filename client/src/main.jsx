// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';   // Redux ke liye
import store from './redux/store.js';     // Tumhara store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>              {/* Redux store provide karo poore app ko */}
      <App />
    </Provider>
  </React.StrictMode>
);
