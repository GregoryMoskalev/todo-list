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
		const newTodo = { ...this.state, id: uuidv4() };
		this.props.add(newTodo);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="content">New Todo</label>
				<input
					name="content"
					id="content"
					value={this.state.content}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
