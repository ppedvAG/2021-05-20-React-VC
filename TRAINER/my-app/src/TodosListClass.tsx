import React, { BaseSyntheticEvent } from "react";
import Todo from "./Todo";
import TodoInterface from "./TodoInterface";

export class TodosListClass extends React.Component<{}, { todos: TodoInterface[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        console.log('didMount');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.setState({ todos: json }))
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        // console.log('e :>> ', e);
        // console.log('e.currentTarget :>> ', e.currentTarget);
        // console.log('e.currentTarget.parentElement :>> ', e.currentTarget.parentElement); // <li></li>
        // console.log('e.currentTarget.parentNode :>> ', e.currentTarget.parentNode); // <li></li>
        // console.log('e.currentTarget.id.substr(4) :>> ', e.currentTarget.id.substr(4)); // für den Fall mit 'todo' + id       
        this.setState(() => {
            let zwischenTodos: TodoInterface[] = [];
            zwischenTodos = this.state.todos.map(todo => {
                // console.log('todo in map :>> ', todo);
                // debugger;
                const { id, name, value } = (e as any).target;
                // const fieldValue = { [name]: value }; todo
                // console.log('fieldValue :>> ', fieldValue); // 
                if (todo.id === Number(id)) {
                   todo.title = value
                }
                return todo
            })
            // const {name, value} = e.currentTarget;
            // zwischenTodos[0].title = value;
            return { todos: zwischenTodos }

        })


    }

    render() {
        return (<>
            <p>TODOS von JsonPlaceHolder</p>
            <ul>
                {this.state.todos.map(todo => (
                    // <li key={todo.id} className={todo.completed ? 'durchgestrichen' : ''}>{todo.title}</li>
                    <Todo key={todo.id} todo={todo} handleChange={this.handleChange} />
                ))}
            </ul>
            </>)
    }

}