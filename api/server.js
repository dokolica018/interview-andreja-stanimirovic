import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import todosRoutes from './routes/todos.js';

const app = express();
app.use(express.json({ extended: true }));
dotenv.config({
	path: './config/index.env',
});
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(morgan('dev'));
app.use(cors());

app.use('/todos', todosRoutes);
app.get('/', (req, res) => {
	res.send('Welcome to server');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
