import React from "react";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export class TodosListClass extends React.Component<{}, { todos: Todo[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.setState({ todos: json }))
    }

    render() {
        return (<>
            <p>TODOS von JsonPlaceHolder</p>
            <ul>
                {this.state.todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'durchgestrichen' : ''}>{todo.title}</li>
                ))}
            </ul></>)
    }

}