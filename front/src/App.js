import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// HTML Components
import Home from './jsx/Home.jsx';
import Error404 from './jsx/Error404.jsx';


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
          <Routes>
            <Route path="/" element={<Home data={homeData} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}





export default App;
