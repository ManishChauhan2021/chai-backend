// require('dotenv').config({path: `./env`})
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env

import express from "express";
import connectDB from "./db/index.js";

const app = express();

// Connect to MongoDB
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is runing at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection faild !!! ", err);
});















/*
import express from "express";
const app = express()

( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch (error){
        console.error("ERROR:", error)
        throw err
    };
})()
*/