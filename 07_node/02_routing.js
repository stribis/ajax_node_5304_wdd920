const express = require('express')
const app = express()

app.get('/', ( req, res )=> {
  // Got a get request, sending a response back
  res.send('Hello Patric')
})

app.post('/', function (req, res) {
  // Gpt a POST request, sending a response
  res.send('Hello Dana')
})

app.get('/about', ( req, res )=> {
  // Got a get request, sending a response back
  res.send('Hallo Phil')
})

app.get('/about/me', ( req, res )=> {
  // Got a get request, sending a response back
  res.send('Hallo Martin')
})

app.listen( 8082, ()=> {
  console.log(`Server Running : http://localhost:8082`)
})