const express = require('express')
const app = express()

var bodyParser = require('body-parser')//add this
app.use(bodyParser())//add this before any route or before using req.body

app.get('*', (req, res) => {
    res.write('<h1><marquee direction=right>Hello from Express path `/` on Now 2.0!</marquee></h1>')
    res.write('<h2>Go to <a href="/about">/about</a></h2>')
    res.end()
})



// This responds a POST request for the homepage
app.post('*', function (req, res) {
    
   console.log(req.headers);
   console.log(req.body);

    res.write("Hola");
    res.end()

})

module.exports = app