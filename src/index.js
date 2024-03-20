import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Astronautas from './components/header/pages/Astronautas/Astronautas';

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="astronautas" element={<Astronautas />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <MainApp />
  </React.StrictMode>
);




