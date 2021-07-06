const express = require('express')
const app = express()

app.get('/', ( req, res )=> {
  // throw new Error('Error Try Again')
  console.error('Try again')
  res.send('Hello World')
})


app.listen( 8082, ()=> {
  console.log(`Server Running : http://localhost:8082`)
})