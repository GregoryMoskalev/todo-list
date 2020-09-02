import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { content: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const todos = { ...this.state, id: uuidv4(), completed: false };
		this.props.add(todos);
		this.setState({ content: '' });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	render() {
		return (
			<form className="todo-form" onSubmit={this.handleSubmit}>
				<label htmlFor="newTodo">New Todo</label>
				<input
					className="todo-form__input"
					name="content"
					id="newTodo"
					value={this.state.content}
					onChange={this.handleChange}
					placeholder="Milk cat"
					autoFocus
				/>
				<button className="todo-form__btn">Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
