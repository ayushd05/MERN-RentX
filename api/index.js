import express from 'express';
import Mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

Mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});
                 
const app = express();

app.listen(3000, () =>{
    console.log("Server is on port 3000!!!!");
}
)