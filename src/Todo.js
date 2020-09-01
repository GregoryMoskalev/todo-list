import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			content: this.props.content
		};

		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleCompletion = this.handleCompletion.bind(this);
	}

	handleRemove() {
		this.props.remove(this.props.id);
	}

	handleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleUpdate(evt) {
		evt.preventDefault();
		this.props.edit(this.props.id, this.state.content);
		this.setState({ isEditing: false });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleCompletion() {
		this.props.toggleCompleted(this.props.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<li>
					<form onSubmit={this.handleUpdate}>
						<label htmlFor="editTodo">Edit Todo</label>
						<input
							id="editTodo"
							name="content"
							type="text"
							value={this.state.content}
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</li>
			);
		} else {
			result = (
				<div key={this.props.id}>
					<li
						onClick={this.handleCompletion}
						className={this.props.completed ? 'completed' : ''}
					>
						{this.props.content}
					</li>
					<button onClick={this.handleEdit}>Edit</button>
					<button onClick={this.handleRemove}>X</button>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
