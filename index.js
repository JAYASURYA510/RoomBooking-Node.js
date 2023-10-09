import express from "express";
import cors from 'cors';
import HallRouter from "./Router/Hall.Router.js"


const app= express();
const PORT= 4000;

app.use(cors());
app.use(express.json())

app.use('/api', HallRouter);


app.listen(PORT,()=>{
    console.log("my app is listening with port", PORT);
});


