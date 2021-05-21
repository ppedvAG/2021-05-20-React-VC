import { useState } from "react";
import { createStore } from "redux";


export default function Redux() {

    function useForceUpdate(action: { type: string }) {
        const [value, setValue] = useState(0);
        return () => setValue(value => myReducer(value, action))
    }
    const [value, setValue] = useState(0);

    const myReducer = (state = 0, action: { type: string }) => {
        switch (action.type) {
            case 'PLUS3':
                return state + 3;
            case 'MINUS5':
                return state - 5;
            default:
                return state;
        }
    }

    const myStore = createStore(myReducer);

    const handleClick = (actionType: string) => {
        myStore.dispatch({ type: actionType });
        setValue(myStore.getState());
        console.log('myStore.getState() :>> ', myStore.getState());
    }

    return (
        <>
            State aus dem Store: {myStore.getState()}
            State aus Component State: {value}
            State aus dem Store: {myStore.getState()}
            <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent as string)}>PLUS3</button>
            {/* <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent!)}>PLUS3</button> */}
            <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent as string)}>MINUS5</button>
        </>
    )
}

