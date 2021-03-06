import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Apartment from './pages/Apartment';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/apartment/:id' element={<Apartment/>} />
        <Route path='/*' element={<Error/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
