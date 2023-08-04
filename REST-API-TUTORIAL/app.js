const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/usersRouter");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(userRouter);







//route error
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Route not found !"
    })
})
//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Server not found !"
    })
})



module.exports = app;