const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to the NODE CLASS!")
    console.log("am good with my request and response");
})

app.get("/welcome",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(5000,()=>{
    console.log("am working perfectly");
})