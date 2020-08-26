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
			<div>
				{this.props.content}
				<button onClick={this.handleRemove}>X</button>
			</div>
		);
	}
}

export default Todo;
