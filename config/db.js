require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(process.env.URL_DB)
  .then(() => {
  console.log('Conncted database')
}).catch((e)=>{
  console.log(e)
})
