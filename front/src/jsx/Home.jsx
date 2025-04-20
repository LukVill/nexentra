import logo from './logo.svg';

const Home = ({ data }) => (
    <div>
      <img src={logo} className="App-logo" alt="js logo" />
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

export default Home;