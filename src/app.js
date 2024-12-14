const express=require('express')
const app=express()

app.use("/hello",(req,res)=>{
      res.send("Hello Balia you will get the gob very soon");
})
app.use("/test",(req,res)=>{
      res.send("This is testing")
})
app.use("/",(req,res)=>{
      res.send("this handle everything.")
})
app.listen(7000,()=>{
      console.log("listening at the port number 7000.")
})