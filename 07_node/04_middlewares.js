const express = require('express')
const app = express()

//  Middleware
let requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', ( req, res )=> {
  // Got a get request, sending a response back
  // res.send('Hello Patric')
  let responseText = `<h1>Hello User</h1><br><small>You logged in at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen( 8082, ()=> {
  console.log(`Server Running : http://localhost:8082`)
})