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
  const valid = username === 'salunaalavi' && password === "123";
//   app.apolloProvider.defaultClient
//     .query({
//       query: users,
//       variables: {
//         username
//       }
//       })
//     .then(result => {
//     if (result.data.Users.length > 0) {
//       const user = result.data.Users[0];
//       const accessToken = jsonwebtoken.sign({
//         id: user.id,
//         username: user.username,
//         password: user.password
//       }, 'secret', {
//         expiresIn: '1h'
//       });
//       res.json({
//         token: accessToken
//       });
//     } else {
//       res.status(401).json({
//         message: 'Invalid credentials'
//       });
//     }
//   });
// });

  if (!valid) {
    return res.json({
      error: "Invalid username or password"
    });
  }

  const accessToken = jsonwebtoken.sign(
    {
      username,
      name: 'User ' + username,
      scope: ['test', 'user']
    },
    'dummy'
  )

  res.json({
    accessToken
  })
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}