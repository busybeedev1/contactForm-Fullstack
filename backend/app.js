import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import cors from "cors";


const app = express();

// connecting database

async function connectingDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
};

connectingDatabase();


// Use cors
app.use(cors({
    origin: "http://localhost:5175",
    credentials: true
}));

// middleware for .env file
const port =process.env.PORT;
app.use(express.json());

// test to see if backend is working
app.get("/", (req, res) => {
    res.send("Backend is working");
});

// routing
import authRouter from "./routers/authRouter.js";

app.use("/api/v1", authRouter);


app.listen(port, () => {
    console.log(`server is up and running at ${port}`)
});