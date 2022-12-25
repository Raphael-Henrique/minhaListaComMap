import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import './teste/Teste'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Template/home/Home';
import Teste from './teste/Teste';


/*
const app = ReactDOM.createApp(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <Router>
      <Routes>
      </Routes>
    </Router>
  </React.StrictMode>
);
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
      <Routes>
        <Route path='/' element={<App />} exact />
      </Routes>
    </Router>
  </React.StrictMode>
);



{/*<App />*/}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
