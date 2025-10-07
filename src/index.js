// require('dotenv').config({path: `./env`})
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env

import express from "express";
import connectDB from "./db/index.js";

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Server running & MongoDB connected!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));















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