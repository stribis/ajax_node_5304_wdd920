const express = require('express')
const app = express()

app.get('/', ( req, res )=> {

  res.send('Hello Patric')
})


app.listen( 8082, ()=> {
  console.log(`Server Running : http://localhost:8082`)
})