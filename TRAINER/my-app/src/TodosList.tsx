/* 
LAB 3

Geben Sie die Todos in einer Liste aus.

Wenn ein Todo completed ist, dann ist es in der Liste durchgestrichen.

Die Linie (line-through) wird durch eine CSS-Klasse hinzugewiesen.
*/

import Rating from './Rating';
import './TodosList.css';

function TodosList() {

    let todos = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
            rating: 3

        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
            rating: 4
        },
        {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false,
            rating: 5
        },
        {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: true,
            rating: 3
        }
    ]

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => todos = json) // variable todos ist mit dem Array von oben befüllt wegen Asynchronität
    /*  */

    // Variante 1: mit for-Schleife und map

    let unsortedList = [];
    for (let index = 0; index < todos.length; index++) {
        const todo = todos[index];
        unsortedList.push(<li key={todo.id} className={todo.completed ? 'durchgestrichen' : ''}>{todo.title}</li>)
    }

    return (
        <>
            <ul>{unsortedList.map(todo => todo)}</ul>

            {/* Variante 2: nur mit map */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'durchgestrichen' : ''}>{todo.title}</li>
                ))}
            </ul>


            {/* Ergänzung mit Rating im M004 */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'durchgestrichen' : ''}>{todo.title}, dringend: <Rating starsNumber={todo.rating} /></li>
                ))}
            </ul>
        </>
    )
}

export default TodosList;