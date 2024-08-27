import { connect } from "mongoose";

export const connectDB = async () =>{
    try {
        await connect(process.env.MONGO_URI);
        console.info("Database connected!");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}