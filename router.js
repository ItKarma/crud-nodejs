const router = require('express').Router();

router.post('/', (req, res) =>{
  const { name } = req.body;
  console.log(name)
})

module.exports = router;
