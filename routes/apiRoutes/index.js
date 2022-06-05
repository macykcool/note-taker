
const router = require('express').Router();
const animalRoutes = require('../apiRoutes/notesRoutes');

router.use(notesRoutes);
// router.use(require('./zookeeperRoutes'));

module.exports = router;