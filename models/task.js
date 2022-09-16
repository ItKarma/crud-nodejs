const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name : { 
    type: String,
    required: true
  },
  done : {
    type: Boolean,
    default: false
  },
  checkList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'checkList',
    required: true
  }
})


module.exports = mongoose.model('TaskSchema', taskSchema);
