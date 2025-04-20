import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [homeData, setData] = useState(null);

  useEffect(() => {
    // Change the URL to match your backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(response => response.json())
      .then(homeData => setData(homeData.message))
      .catch(error => console.error('Error - failed home api get request: ', error));
  }, []);

  return (
    // Wrap the entire app in Router
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home data={homeData} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

const Home = ({ data }) => (
  <div>
    <p>
      Hi! This is Luke's first website from scratch. I have a message from the database: {data}
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
);

export default App;
