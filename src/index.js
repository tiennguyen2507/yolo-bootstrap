import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout'
import './scss/index.scss'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
ReactDOM.render(
  <React.StrictMode>
      <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
