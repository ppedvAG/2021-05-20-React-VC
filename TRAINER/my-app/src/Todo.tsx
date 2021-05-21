import React from "react";
import TodoInterface from "./TodoInterface";

export default class Todo extends React.Component<{ todo: TodoInterface, handleChange: (e: React.FormEvent<HTMLInputElement>) => void }, {}> {
    
    render() {
        return (<>
            <li key={this.props.todo.id} className={this.props.todo.completed ? 'durchgestrichen' : ''}>
                {/* in der ID noch string todo für den Fall, wenn weitere inputs mit id angelegt werden, wie z.B. für inputs für die user */}
                {/* <input id={'todo' + this.props.todo.id.toString()} type="text" value={this.props.todo.title} onChange={this.props.handleChange}/> */}
                <input id={this.props.todo.id.toString()} name={'title'} type="text" value={this.props.todo.title} onChange={this.props.handleChange}/>
            </li>           
        </>)
    }
}
