import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';
import './TodoList.css';

export class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.edit = this.edit.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
	}

	add(item) {
		this.setState((state) => ({
			todos: [ ...state.todos, item ]
		}));
	}

	remove(id) {
		this.setState({ todos: this.state.todos.filter((item) => item.id !== id) });
	}

	edit(id, edited) {
		const editedTodos = this.state.todos.map((item) => {
			if (item.id === id) {
				return { ...item, content: edited };
			}
			return item;
		});
		this.setState({ todos: editedTodos });
	}

	toggleCompleted(id) {
		const editedTodos = this.state.todos.map((item) => {
			if (item.id === id) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});
		this.setState({ todos: editedTodos });
	}

	render() {
		const todos = this.state.todos.map((item) => (
			<Todo
				id={item.id}
				key={item.id}
				remove={this.remove}
				content={item.content}
				edit={this.edit}
				completed={item.completed}
				toggleCompleted={this.toggleCompleted}
			/>
		));
		return (
			<div className="todo-list">
				<h1 className="todo-list__header">Todo List</h1>
				<NewTodoForm add={this.add} />
				<ul className="todo-list__list">{todos}</ul>
			</div>
		);
	}
}

export default TodoList;
