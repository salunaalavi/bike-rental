const express = require('express')
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')
const app = express()

app.get('/', (req, res, next) => {
  res.send("SEVER WORK WELL!!!")
})

app.use(bodyParser.json());

app.use (bodyParser.urlencoded ({
	extended: true
}));



app.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  const accessToken = jsonwebtoken.sign({
    username,
    password,
    name: 'User ' + username + password,
    scope: ['test', 'user']
  }, 'dummy', {
    expiresIn: '1h'
  })

  res.json({
    accessToken
  })
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}