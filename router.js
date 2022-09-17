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

router.get('/:id', async ( req, res) =>{
  try {
    let findOneList = await checkList.findById(req.params.id);
    res.status(200).json({ findOneList })
  } catch (error) {
    res.status(500).json( error )
  }
})

router.put('/:id', async ( req, res) =>{
  let { name } = req.body
  try {
   let updateList = await checkList.findByIdAndUpdate(req.params.id, { name }, { new : true }) 
    res.status(200).json({ updateList })
  } catch (error) {
    res.status(422).json({ "Error" : error })
  }
})

router.delete('/:id', async ( req, res) => {
  try {
   let deleteList = await checkList.findOneAndRemove(req.params.id)
    res.status(200).json({ message : "Lista deletada com sucesso !."})
  } catch (error) {
    res.status(422).json({ message : "Ouve um error interno"})
  }
})
module.exports = router;
