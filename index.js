const express = require("express")
const app = express()
const PORT = 5000

//Middlewear
const logger = function(req, res, next){
    console.log("Api console user") //logic
    next()
}
app.use(logger) //must write if u want to run in every where


app.get("/", (req, res) => {
    res.send("Hello World ")
})

app.get("/products", (req, res)=> {
res.send([{id:1, title:"myWork", desc: ""}])
})

app.post("/add", (req, res)=> {
res.send("added some words")
})
// post se browser(localhost) me nhi show hota lekin postman me check krskte hn 


app.listen(PORT,
    () => console.log(`server is running at ${PORT}`))
