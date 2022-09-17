const router = require('express').Router();
const checkList = require('./models/checklist');
const task = require('./models/task')


router.get('/', async ( req, res)=>{
  try {
    let findList = await checkList.find();
    res.status(200).json({ findList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error})
  }
})

router.post('/', async (req, res) =>{
  const { name } = req.body;
  try{

    let createList = await checkList.create({ name });
    res.status(200).json({ createList });
  }catch (error){
    console.error(error);
    res.status(422).json({ error })
  }
})

router.get('/', async ( req, res) =>{
  try {
    let findOneList = await checkList.findById(req.params.id);
    res.status(200).json({ findOneList })
  } catch (error) {
    res.status(500).json( error )
  }
})

module.exports = router;
