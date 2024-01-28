const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");


//const authRoutes = require("./routes/authRoutes");

const app = express();


//middleware
app.use((req,res,next) => {
    console.log("path " + req.path + "method " + req.method);
    next();
});


app.get('/',(req,res)=>{
    res.send("Motor Insurance");
});

//Chumma dummy

//db connection
mongoose.connect(process.env.MANGO_URI)
.then(() => {
    app.listen(process.env.PORT,()=>{
        console.log("DB is connected sucessfully and Listening to port " + process.env.PORT);
});
}).catch((error) => console.log(error));