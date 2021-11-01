import mongoose from 'mongoose';

const connectDB = async () => {
	// mongodb://mongo:27017/todos
	const connection = await mongoose.connect(
		'mongodb+srv://todo:todo@todoscluster.fuvhq.mongodb.net/todosdb?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			// useCreateIndex: true,
			// useFindAndModify: false,
			useUnifiedTopology: true,
		}
	);

	console.log(`MongoDB Connected: ${connection.connection.host}`);
};

export default connectDB;
