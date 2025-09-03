import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const app = express();


async function connectToDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectToDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})