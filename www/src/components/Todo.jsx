import React, { useState } from 'react';
import { deleteTodo, updateTodo } from '../service';

const Todo = ({ todo, setTodos, setMounted }) => {
	const [mark, setMark] = useState(todo.complete);
	const [show, setShow] = useState(true);
	const [inp, setInp] = useState('');
	const onMark = () => {
		setMark(!mark);
		let updatedTodo = { ...todo };
		updatedTodo.complete = !updatedTodo.complete;
		console.log(updatedTodo);
		updateTodo(updatedTodo._id, updatedTodo).then(() => {
			setTodos((prev) => prev.map((todo) => (todo._id === updatedTodo._id ? { ...todo, mark } : todo)));
			setMounted(true);
		});
	};
	const onDelete = () => {
		deleteTodo(todo._id).then(() => {
			setTodos((prev) => {
				let copy = [...prev];
				let index = copy.indexOf(todo);
				copy.splice(index, 1);
				return copy;
			});
		});
	};
	return (
		<div className="col s12 m6">
			<div className="card teal darken-1">
				<div className="card-content white-text">
					{show ? (
						<div>
							<span style={todo.complete ? { textDecoration: 'line-through' } : {}} className="card-title">
								{todo.title}
							</span>
						</div>
					) : (
						<div>
							<input
								defaultValue={todo.title}
								autoFocus
								onChange={(e) => {
									setInp(e.target.value);
								}}
								style={{ color: 'white' }}
								type="text"
								placeholder={todo.title}
							/>
							<i
								onClick={() => {
									let updatedTodo = { ...todo };
									!inp ? (updateTodo.title = todo.title) : (updatedTodo.title = inp);
									// updatedTodo.title = inp
									updateTodo(updatedTodo._id, updatedTodo).then(() => {
										setTodos((prev) => prev.map((todo) => (todo._id === updatedTodo._id ? { ...todo, mark } : todo)));
									});
									setShow(true);
									setMounted(true);
								}}
								style={{ cursor: 'pointer' }}
								className="material-icons right"
							>
								check_box
							</i>
						</div>
					)}
				</div>
				<div className="card-action teal">
					<button onClick={onMark} className="btn btn-small waves-effect waves-light yellow darken-2" type="submit">
						Mark
						<i className="material-icons right">check_box</i>
					</button>
					<button
						onClick={() => {
							setShow(false);
						}}
						className="btn btn-small waves-effect waves-light"
						type="submit"
					>
						Edit
						<i className="material-icons right">edit</i>
					</button>
					<button onClick={onDelete} className="btn btn-small waves-effect waves-light red darken-2" type="submit">
						Delete
						<i className="material-icons right">delete_forever</i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Todo;
