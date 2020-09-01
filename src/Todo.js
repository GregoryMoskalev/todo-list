import React, { Component } from 'react';
import Bin from './icons/Bin';
import Checkmark from './icons/Checkmark';
import FloppyDisk from './icons/FloppyDisk';
import Pencil from './icons/Pencil';
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
						<button>
							<FloppyDisk />
						</button>
					</form>
				</li>
			);
		} else {
			result = (
				<div className="todo" key={this.props.id}>
					<li onClick={this.handleCompletion} className="todo__list-item">
						{this.props.content} {this.props.completed && <Checkmark />}
					</li>
					<button className="todo__btn" onClick={this.handleEdit}>
						<Pencil />
					</button>
					<button className="todo__btn" onClick={this.handleRemove}>
						<Bin />
					</button>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
