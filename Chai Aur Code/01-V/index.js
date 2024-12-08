const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/raghav", (req, res)=>{
  res.send("Hello Raghav")
})

app.get("/login", (req, res)=>{
  res.send("Hello Login")
})

app.get("/signup", (req, res) =>{
  res.send("Hello Sign-Up")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - Hello Raghav`)
})