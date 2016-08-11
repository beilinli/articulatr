var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('pages/index')
})

app.get('/about', function(req, res) {
  res.render('pages/about')
})

app.get('/login', function(req, res) {
  res.render('pages/login')
})

app.get('/register', function(req, res) {
  res.render('pages/register')
})

app.listen(app.get('port'), function() {
  console.log('App running on port ' + app.get('port'))
})
