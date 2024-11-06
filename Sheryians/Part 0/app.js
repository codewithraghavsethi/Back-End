const express = require("express");
const app = express()

app.set("veiw engine", "ejs")

app.use((req, res, next)=>{
    console.log("Hello Ji")
    next()
})

app.get("/", (req, res, next)=>{

    let a = 10
    let b = 3
    console.log(a+b);
    next()

}, (req, res)=>{
    res.render("index.ejs")
})

app.get("/get-form-data", (req, res)=>{
    console.log(req.query)
    res.send("Data Recieved")

})


app.listen(3000)
