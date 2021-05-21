import React, { ReactElement } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ElementChildren, { ReactChildrenComponent } from './ChildrenComponent';
import ClassComponent from './ClassComponent';
import ComponentInState from './ComponentInState';
import DateComponent, { DateComponentClass, DateComponentFunction } from './DateComponent';
import InputComponent from './InputComponent';
// import DateComponent, { DateComponentFunction } from './DateComponent';
import PropsComponente from './Props';
import Redux from './Redux';
import TodosList from './TodosList';
import { TodosListClass } from './TodosListClass';


function App() {
  /*   const variableFürKomponente: ReactElement =
      <ElementChildren>
        <div>text in div
          <p>p in div</p>
        </div>
      </ElementChildren> */
  return (
    <div>
      <header>
        <h1>Demo App mit TypeScript</h1>
      </header>

      <nav>
        navigatin: <button><Link to="/datecomponent">DateComponent</Link></button>
        <button><Link to="/todolist">TodoList</Link></button>
      </nav>

      {/* Die Inhalte von den verlinkten Komponenten werden auch hier angezeigt, das eine Switch-Stelle für verschiedene Komponenten */}
      <Switch>
        <Route path="/datecomponent" component={DateComponent}></Route>
        <Route path="/todolist" component={TodosList}></Route>
      </Switch>



      <p>
        {/* <DateComponent /> */}
      </p>

      {/*       <TodosList /> */}
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
      <PropsComponente />

      <h2>Class Component & Props</h2>
      <ClassComponent testEigenschaft="testWert" />

      <h2>Lab: Uhrzeit und Class Component</h2>
      {/* <DateComponentClass /> */}

      <h2>Uhrzeit und Hooks</h2>
      {/*     <DateComponentFunction /> */}

      <h2>Input Komponente</h2>
      <InputComponent />

      <h2>Component in State</h2>
      {/*    <ComponentInState /> */}

      <h2>Fetching Daten, asynchron</h2>
      {/*     <TodosListClass /> */}

      <h2>Redux</h2>
      <Redux />


    </div>

  );
}

export default App;

export function SimpleComponent() {
  return (
    <h2>H2 in Simple Component</h2>
  )
}