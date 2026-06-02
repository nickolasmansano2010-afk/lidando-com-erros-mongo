import mongoose from "mongoose"

mongoose.connect("mongodb+srv://nickolas:nickname013@cluster0.1fv2md0.mongodb.net/?appName=Cluster0");

let db = mongoose.connection;

export default db;