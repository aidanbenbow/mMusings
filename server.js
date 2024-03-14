const express = require('express'),
app = express(),
expressLayouts = require('express-ejs-layouts'),
indexRouter = require('./routes/index'),
gamesRouter = require('./routes/games'),

dotenv= require('dotenv').config()


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/games', gamesRouter)



app.listen(process.env.PORT || 3000)