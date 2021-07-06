const express = require('express')
const app = express()


app.set('view-engine', 'ejs')

app.get('/', ( req, res )=> {
  res.render('index.ejs')
  // res.send('Hello Patric')
})

app.get('/about', ( req, res )=> {
  res.render('about.ejs')
  // res.send('Hello Patric')
})



app.listen( 8082, ()=> {
  console.log(`Server Running : http://localhost:8082`)
})