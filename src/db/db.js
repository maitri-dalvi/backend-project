import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

//this is how we connect database

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected, DB HOST: ${connectionInstance.connection.host} `);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1)
    }
}

export default connectDB