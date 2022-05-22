import express from "express";

const app = express()

app.listen(process.env.PORT || 5000)
console.log(`Hi from port ${process.env.PORT || 5000}`)

app.get('/', (req, res)=>{
    return res.send("hi from node and TS")
})