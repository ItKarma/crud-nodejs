const express = require('express');
const path = require('path')
const logger = require('morgan')
const routerList = require('./routers/router');
const routerPages = require('./routers/pages')
const app = express();

require('./config/db')

app.use(logger('dev'))
app.use(express.json())

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use('/', routerPages)
app.use('/checklist', routerList)

app.listen(3000, ()=>{
  console.log('Servidor ligado !!.')
})
