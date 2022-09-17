const router = require('express').Router();
const checkList = require('./models/checklist');
const Task = require('./models/task')

router.post('/', (req, res) =>{
  const { name } = req.body;
  try{

    let Checklist = checkList.create({ name });
    res.status(200).json({ Checklist });
  }catch (e){
    console.log(e)
    res.status(422).json({e})
  }
})

module.exports = router;
