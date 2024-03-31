import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.9xzfrlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL);
        console.log('Database connected succefully')
    } catch (error) {
        console.log(`Error while connecting with the database`, error)
    }
}

export default Connection;