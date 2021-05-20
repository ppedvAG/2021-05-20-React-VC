/* 
LAB 3

Geben Sie die Todos in einer Liste aus.

Wenn ein Todo completed ist, dann ist es in der Liste durchgestrichen.

Die Linie (line-through) wird durch eine CSS-Klasse hinzugewiesen.
*/

import './TodosList.css';

function TodosList() {

    let todos = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
        },
        {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
        },
        {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: true
        }
    ]

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
        </>
    )
}

export default TodosList;