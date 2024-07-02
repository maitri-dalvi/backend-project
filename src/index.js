// require('dotenv).config({path: './env'})

import dotenv from "dotenv";

import connectDB from "../db/index.js";

dotenv.config({
    path: './env'
})



connectDB()


//function connectDB() {}
//iife //start iife with semi colon

/* this is one type of method
import express from 'express';

const app = express()

;( async () => {             
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
        app.on('error', (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })



    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }

}) ()   */