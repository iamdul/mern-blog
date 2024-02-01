import express from 'express'
import { connect } from 'http2';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDB connected')
}).catch(err=>{
    console.log(err)
});
const app =express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
});