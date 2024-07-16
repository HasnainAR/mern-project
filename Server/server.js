require("dotenv").config();//allows to use dotenv
const express = require("express");//import express library
const app = express();//This line creates an instance of an Express application. 
//The app object is used to configure the server, define routes, and handle requests and responses.
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());//now we can use json, parses json data from request
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);


const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () =>{
        console.log(`server is running at port: ${PORT}`)
    })

})
