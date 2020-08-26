import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';

export class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
	}

	add(item) {
		this.setState((state) => ({
			todos: [ ...state.todos, item ]
		}));
	}

	remove(id) {
		this.setState({ todos: this.state.todos.filter((item) => item.id !== id) });
	}

	render() {
		const todos = this.state.todos.map((item) => (
			<li>
				<Todo id={item.id} key={item.id} remove={this.remove} content={item.content} />
			</li>
		));
		return (
			<div>
				<ul>{todos}</ul>
				<NewTodoForm add={this.add} />
			</div>
		);
	}
}

export default TodoList;
