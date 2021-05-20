import React from 'react';
import './App.css';
import DateComponent from './DateComponent';
import TodosList from './TodosList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo App mit TypeScript</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Homepage
        </a>

      </header>
      <p>
        <DateComponent />
      </p>
      <h2>Aufgaben für heute:</h2>
      <TodosList />
    </div>
  );
}

export default App;

export function SimpleComponent() {
  return (
    <h2>H2 in Simple Component</h2>
  )
}