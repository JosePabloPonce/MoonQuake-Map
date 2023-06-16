import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Globo from './Sphere/sphere'
import TopSection from './Information/infromation';
import BottomInformation from './BottomInformation/bottominformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopSection />
    <BottomInformation />
    <Globo />

  </React.StrictMode>
);

reportWebVitals();
