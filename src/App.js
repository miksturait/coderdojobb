import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Calendar from './pages/Calendar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
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
      <Calendar/>
    </div>
  );
}

export default App;
