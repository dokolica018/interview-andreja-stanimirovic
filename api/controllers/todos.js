import mongoose from 'mongoose';
import Todo from '../models/todos.js';

export const createTodo = async (req, res) => {
	const todo = new Todo(req.body);
	try {
		await todo.save();
		res.status(201).json(todo);
	} catch (error) {
		res.status(409).json({
			error: error.message,
		});
	}
};
export const readTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (error) {
		res.status(404).json({
			error: error.message,
		});
	}
};

export const updateTodo = async (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	const { complete } = req.body;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
	const updatedTodo = { title, _id: id, complete };
	await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
	res.json(updatedTodo);
};
export const deleteTodo = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
	await Todo.findByIdAndRemove(id);
	res.json({ message: 'Todo deleted successfully' });
};
export const markTodo = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
	await Todo.findById(id);
	res.json({ message: 'Todo marked successfully' });
};
