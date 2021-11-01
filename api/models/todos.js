import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		complete: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
