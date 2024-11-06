const express = require("express");
const app = express()

app.set("veiw engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.listen(3000)
