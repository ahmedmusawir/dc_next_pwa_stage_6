import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { addTodo, removeTodo } from 'store/actions/todo';
import TodoItem from './TodoItem';

class Todo extends React.Component {
	state = {
		text: ''
	};

	addTodos = e => {
		e.preventDefault();

		this.props.addTodo(this.state.text);
		this.setState({ text: '' });
	};

	removeTodo = todo => {
		this.props.removeTodo(todo);
	};

	render() {
		console.log(this.state);
		return (
			<div className="mdl-card mdl-shadow--2dp">
				<form onSubmit={this.addTodos}>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input
							type="text"
							value={this.state.text}
							onChange={e => this.setState({ text: e.target.value })}
							className="form-control"
							id="input"
						/>
						<label className="mdl-textfield__label" htmlFor="input">
							What must be done?
						</label>
					</div>
				</form>

				<ul>
					{this.props.todos.map((todo, i) => (
						<TodoItem key={i} todo={todo} remove={this.removeTodo} />
					))}
				</ul>
			</div>
		);
	}
}

export default connect(
	({ todos }) => ({ todos }),
	{ addTodo, removeTodo }
)(Todo);

// const mapStateToProps = state => {
// 	// console.log(state);
// 	return {
// 		todos: state.todos
// 	};
// };
// const mapDispatchToProps = { addTodo, removeTodo };

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Todo);
