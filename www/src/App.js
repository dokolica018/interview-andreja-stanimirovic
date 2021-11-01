import { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Loading from './components/Loading';
import { getAllTodos } from './service';
import Header from './components/Header';

function App() {
	const [todos, setTodos] = useState([]);
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		getAllTodos().then((res) => {
			setTodos(res.data);
		});
		if (mounted) {
			getAllTodos().then((res) => {
				setTodos(res.data);
				setMounted(false);
			});
		}
	}, [mounted]);
	console.log(todos);
	return (
		<>
			<Header />
			<Form todos={todos} setTodos={setTodos} setMounted={setMounted} />
			{!todos ? (
				<Loading />
			) : todos.length > 0 ? (
				<TodoList todos={todos} setTodos={setTodos} setMounted={setMounted} mounted={mounted} />
			) : (
				<h5 className="text-teal">Nothing to do...</h5>
			)}
		</>
	);
}

export default App;
