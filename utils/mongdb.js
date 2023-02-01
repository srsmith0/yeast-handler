import mongoose from "mongoose";

export default connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

