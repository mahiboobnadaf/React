import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import ImageSlider from './ImageSlider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App country="Dubai" />

    <ImageSlider />
    
  </React.StrictMode>
);
