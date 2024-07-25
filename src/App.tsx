import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const test = async () => {
  //DOCUMENTATION IN https://pokeapi.co/
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const request = 'pokemon?limit=151&offset=0'; 
  const testConexion = await axios.get(`${baseUrl}${request}`);
  console.log(testConexion.data)
};

test()  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
