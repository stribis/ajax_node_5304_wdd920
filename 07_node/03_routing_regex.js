const express = require('express')
let app = express();

//This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

//This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

//This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})

//This route path will match anything with an “a” in it.
app.get(/a/, function (req, res) {
  res.send('/a/')
})

//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

app.listen(8081,()=>{
	console.log('App is listening at port 8081')
})