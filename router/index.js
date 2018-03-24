const router = require('express').Router();
const room = require('./room/index');

router.get('/', (req, res) => {
  res.send({name: 'kapko'});
});

router.use('/room', room);

module.exports = router;
