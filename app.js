const express = require('express')
const app = express()
const path = require('path')
const engine = require('ejs-mate')

app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.listen('3000', (req, res) => {
    console.log('listening on port 3000')
})