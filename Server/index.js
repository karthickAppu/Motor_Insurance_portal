const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRouter");
const userRoutes = require("./routes/userRoutes");
const policyRoutes=require("./routes/policyRoutes")

const app = express();


//middleware
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());
app.use((req,res,next) => {
    console.log("path " + req.path + " method " + req.method);
    next();
});


app.get('/',(req,res)=>{
    res.send("Motor Insurance");
});
app.get('/PolicyDetails',(req,res)=>{
    res.send("Welcome to Policy Details");
});


//db connection
mongoose.connect(process.env.MANGO_URI)
.then(() => {
    app.listen(process.env.PORT,()=>{
        console.log("DB is connected sucessfully and Listening to port " + process.env.PORT);
});
}).catch((error) => console.log(error));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/policy", policyRoutes);