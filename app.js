var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

app.set('port', (process.env.PORT || 3000))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.listen(app.get('port'), function() {
  console.log('App running on port ' + app.get('port'))
})
