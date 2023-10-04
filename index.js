const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const {json, urlencoded} = require("express");
const userRouter = require("./router/userRouter");
const taskRouter = require("./router/taskRouter");


const app = express();
app.use(cors());

app.use(json());
app.use(urlencoded({extended:false}));
app.use("/users", userRouter);
app.use("/tasks", taskRouter);


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.y6yhged.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`);

app.listen(5810, ()=>console.log("server is runing at port 5810"));
