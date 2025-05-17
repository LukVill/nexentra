import logo from './logo.svg';
import React from 'react';
import './Home.css';

const Home = ({ data }) => {
  console.log('message returned:',data);
    return(
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="js logo" />
        <p>
          Hi! This is Luke's first website from scratch. I have a message from the database: {data}
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
};

export default Home;