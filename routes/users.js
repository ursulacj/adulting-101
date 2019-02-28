var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;