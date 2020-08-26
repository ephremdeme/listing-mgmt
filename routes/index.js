var express = require('express');
var router = express.Router();
var User = require('../models').User


/* GET home page. */
router.get('/api', function(req, res, next) {
  User.findAll().then(users=>{
    return res.status(200).json(users);
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
