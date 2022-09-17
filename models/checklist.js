const mongoose = require('mongoose');

const checkList = mongoose.Schema({
  name : { type: String, required : true },
  task : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'task'
  }],
})

module.exports = mongoose.model('CheckList', checkList);

