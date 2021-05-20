import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/* ReactDOM.render(
  <Lifecycle />, document.getElementById('lifecycleDiv') // ohne Strict werden intervale nicht gecleart!  
) */

/* ReactDOM.render(
  <React.StrictMode>
    <Lifecycle />
  </React.StrictMode>, document.getElementById('lifecycleDiv')
)

let lifecycleDivNode = document.getElementById('lifecycleDiv')
setTimeout(() => ReactDOM.unmountComponentAtNode(lifecycleDivNode as Element), 2000) // Fehler wegen setState in der Komponente
 */



/* ReactDOM.render(
  <React.StrictMode>
    <UseEffect />
  </React.StrictMode>, document.getElementById('useEffectDiv')
) */

let useEffectDiv = document.getElementById('useEffectDiv')
setTimeout(() => ReactDOM.unmountComponentAtNode(useEffectDiv as Element), 2000) // Fehler wegen setState in der Komponente


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
