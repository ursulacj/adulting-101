var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notes');

router.get('/', notesCtrl.index);
router.get('/new', notesCtrl.new);
router.post('/', notesCtrl.create);

module.exports = router;
