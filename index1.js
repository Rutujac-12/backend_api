import express from 'express';
import userRoutes from './routes/userRoutes.js';
import axios from 'axios'

const app = express();

app.use(express.json());

app.use('/api', userRoutes)

app.listen(4000, ()=>{
    console.log("Server Listening on Port 4000")
})