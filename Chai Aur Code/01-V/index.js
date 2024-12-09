require("dotenv").config()
const express = require('express')
const app = express()
// const port = 3000

const githubdata = {
  "login": "codewithraghavsethi",
  "id": 131133965,
  "node_id": "U_kgDOB9DyDQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/131133965?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/codewithraghavsethi",
  "html_url": "https://github.com/codewithraghavsethi",
  "followers_url": "https://api.github.com/users/codewithraghavsethi/followers",
  "following_url": "https://api.github.com/users/codewithraghavsethi/following{/other_user}",
  "gists_url": "https://api.github.com/users/codewithraghavsethi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/codewithraghavsethi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/codewithraghavsethi/subscriptions",
  "organizations_url": "https://api.github.com/users/codewithraghavsethi/orgs",
  "repos_url": "https://api.github.com/users/codewithraghavsethi/repos",
  "events_url": "https://api.github.com/users/codewithraghavsethi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/codewithraghavsethi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "RAGHAV SETHI",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "👋 Hello, I'm a passionate full stack developer with a love for building seamless web applications.",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-04-18T05:39:03Z",
  "updated_at": "2024-11-11T17:16:43Z"
}

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

app.get("/github", (req, res)=> {
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT} - Hello Raghav`)
})