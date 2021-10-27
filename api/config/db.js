import mongoose from 'mongoose';

const connectDB = async () => {
    const connection = await mongoose.connect("mongodb://mongo:27017/todos" , {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`)
}

export default connectDB