////
//dependencies
//////////////////////
//get .env variables
require("dotenv").config();
//pull PORT from .env
const { PORT } = process.env
// console.log(PORT)
const express =require("express")
const app =express()
const cors = require("cors");


///middleware
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies



//routes

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

//import all available routes in our /routes/index.js
const routes = require("./routes/index")
app.use("/",routes)

//catch route if it doesn't match to anything we will sened this response
app.use((req,res) => {res.status(404).json({message:"NOT A PROPER ROUTES"})})





//LISTENER
app.listen(PORT,() =>console.log(`listensing on PORT ${PORT}`))