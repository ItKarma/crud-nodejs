const express = require('express');
const path = require('path')
const logger = require('morgan')
const routers = require('./router');
const app = express();

require('./config/db')

app.use(logger('dev'))
app.use(express.json())

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/', routers)

app.listen(3000, ()=>{
  console.log('Servidor ligado !!.')
})
