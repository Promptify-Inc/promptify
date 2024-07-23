import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    console.log('i am here')

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptifyDB",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log("Hey there! It's not your fault, here's the reason below");
        console.log(error);
    }
}


// HtEktq5hWnCYxyek