import React, { Component } from 'react';

export class Todo extends Component {
	constructor(props) {
		super(props);

		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove() {
		this.props.remove(this.props.id);
	}

	render() {
		return (
			<li key={this.props.id}>
				{this.props.content}
				<button>Edit</button>
				<button onClick={this.handleRemove}>X</button>
			</li>
		);
	}
}

export default Todo;
