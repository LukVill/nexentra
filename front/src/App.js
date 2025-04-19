import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Change the URL to match your backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error:', error));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the message from the Python backend: {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
