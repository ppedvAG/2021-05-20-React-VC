import React, { ReactElement } from 'react';
import './App.css';
import ElementChildren, { ReactChildrenComponent } from './ChildrenComponent';
import ClassComponent from './ClassComponent';
import DateComponent, { DateComponentClass } from './DateComponent';
import PropsComponente from './Props';
import TodosList from './TodosList';


function App() {
/*   const variableFürKomponente: ReactElement =
    <ElementChildren>
      <div>text in div
        <p>p in div</p>
      </div>
    </ElementChildren> */
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
      <h2>JSX / TSX, Iteration, ClassName</h2>
      <h2>Aufgaben für heute:</h2>
      <TodosList />
      <h2>TSX.props.children</h2>
      <ElementChildren />
    <h2>React.Children</h2>
    <ReactChildrenComponent>
      <p>p1</p>
      <p>p2</p>
      <p>p3</p>      
    </ReactChildrenComponent>

    <h2>Props Objekt</h2>
    <PropsComponente zahl={4} />
    <PropsComponente/>

    <h2>Class Component & Props</h2>
    <ClassComponent testEigenschaft="testWert"/>

    <h2>Lab: Uhrzeit und Class Component</h2>
    <DateComponentClass />




    </div>
    
  );
}

export default App;

export function SimpleComponent() {
  return (
    <h2>H2 in Simple Component</h2>
  )
}