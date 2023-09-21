import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
AOS.init({duration: 300, easing: 'ease',  once: true,});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/adverts-car-rental">
    <App />
    </BrowserRouter >
  </React.StrictMode>
);
