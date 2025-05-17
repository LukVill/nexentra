import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// HTML Components
import Home from './Home.jsx';
import Error404 from './Error404.jsx';

function App() {


  // DATA API --------------------------------------------------------------  //

  // Home data fetch
  const [homeData, setData] = useState(null);

  useEffect(() => {
    // Change the URL to match your backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(response => response.json())
      .then(homeData => setData(homeData.message))
      .catch(error => console.error('Error - failed home api get request: ', error));
  }, []);








  // ROUTING ---------------------------------------------------------------  //
  return (
    

      // Client Side Routing
      <Router>
          <Routes>
            <Route path="/" element={<Home data={homeData} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
    </Router>


  );
}





export default App;
