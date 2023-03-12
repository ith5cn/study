
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'))

app.get('/index', (req, res) => {
  res.sendFile(__dirname + "/views/" + "index.html")
})
app.post('/index', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.send({
    code: 0,
    msg: '11'
  })
})
app.listen('3000')