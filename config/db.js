const mongoose = require('mongoose');

mongoose.connect('');

const db = mongoose.connection;

db.once('open', () => {
  console.log('Conectado com o banco de dados.')
})
