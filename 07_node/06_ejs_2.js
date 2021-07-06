const express = require('express')
const app = express()


app.set('view-engine', 'ejs')

app.get('/', ( req, res )=> {

  let students = [
    
    { name: 'Tobia', note: '14' },
    { name: 'Dana', note: '6' },
    { name: 'Jasmin', note: '1' },
    { name: 'Zipora', note: '8' },
    
  ]

  let message = "Express is very simple and has many uses!"

  res.render('index.ejs', {
    students: students,
    message: message
  })
  // res.send('Hello Patric')
})

app.get('/about', ( req, res )=> {
  res.render('about.ejs')
  // res.send('Hello Patric')
})



app.listen( 8082, ()=> {
  console.log(`Server Running : http://localhost:8082`)
})