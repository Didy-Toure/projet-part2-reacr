import React from 'react';
import { createRoot } from 'react-dom'; 
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);



