var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notes');

router.get('/', notesCtrl.index);
router.get('/new', notesCtrl.new);
router.get('/:id', notesCtrl.show);
router.post('/', notesCtrl.create);
router.put('/:id', notesCtrl.edit);
router.delete('/:id', notesCtrl.delete);



module.exports = router;
