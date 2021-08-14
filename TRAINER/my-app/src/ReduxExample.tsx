import { useSelector, useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

/* INITIAL STATE */
const initialState = {
  value: 0
}


/* PLATZ FÜR ACTION-DEFINITIONEN */
// in diesem Beispiel weggelassen


/* REDUCER */
const myReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'PLUS3':
      return { ...state, value: state.value + 3 };
    case 'MINUS5':
      return { ...state, value: state.value - 5 };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  mathResult: myReducer
})
interface SystemState {
  mathResult: {
    value: number
  }
}


/* STORE */
export const myStore = createStore(rootReducer, devToolsEnhancer({}))


/* SELECTORS */
const getCountValue = (state: SystemState) => state.mathResult.value;


/* COMPONENTS */
export default function ReduxExampleComponent() {
  /* A hook to access the redux store's state. 
This hook takes a selector function as an argument. 
The selector is called with the store state. */
  const count = useSelector(getCountValue)
  const dispatch = useDispatch()


  return (
    <>
    <h2>REDUXEXAMPLECOMPONENT</h2>

      Test mit count: {count}

      <button onClick={(event) => dispatch({ type: (event.target as HTMLButtonElement).textContent as string })}>PLUS3</button>
      {/* <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent!)}>PLUS3</button> */}
      <button onClick={(event) => dispatch({ type: (event.target as HTMLButtonElement).textContent as string })}>MINUS5</button>
    </>
  )
}

/* RENDERING (APP WITH) COMPONENTS THROUGH PROVIDER */

/* ReactDOM.render(
  <Provider store={myStore}>
    <ReduxExampleComponent />
  </Provider>, document.getElementById('reduxExample')
) */


