import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App';
import POPOSList from './components/POPOSList/POPOSList';
import About from './components/About/About';
import reportWebVitals from './reportWebVitals';
import POPOSDetails from './components/POPOSDetails/POPOSDetails'
import Newsletter from './components/Newsletter/Newsletter';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();