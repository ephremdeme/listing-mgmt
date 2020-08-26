var express = require('express');
var router = express.Router();
const validator = require('validator');
const User = require('../models').User;
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs')


/* GET users listing. */
router.post('/', function (req, res) {
  const {
    email,
    password,
    first_name,
    last_name
  } = req.body;
  if (!validator.isEmail(email + '') || validator.isEmpty(password + '')) {
    return res.status(400).json({
      msg: "Please enter valid fields"
    });
  }
  User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    if (user) {
      return res.status(400).json({
        msg: 'User Already exist'
      });
    } else {
      try {
        const user = User.build({
          firstName: first_name,
          lastName: last_name,
          email: email,
          password: bcrypt.hashSync(password, 10)
        });
        const token = User.generateToken(user);
        res.status(200).send({
          user,
          token
        });
      } catch (error) {
        res.status(400).send(error);
      }
    }
  });
});

router.post('/login', async (req, res) => {
  const {
    email,
    password
  } = req.body;
  if (!validator.isEmail(email + '') || validator.isEmpty(password + '')) {
    return res.status(400).send({
      msg: "Please enter valid fields"
    });
  }

  User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    if (!user) return res.status(400).json({
      msg: 'User Does not exist'
    });
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) return res.status(400).json({
          msg: 'Invalid credentials'
        });

        const token = user.tokens;
        user.password = null;
        console.log("successs")
        return res.status(200).send({
          token,
          user
        });
      })
  });

});

router.post('/:id', auth, (req, res)=>{
  const {
    email,
    password,
    first_name,
    last_name
  } = req.body;

  User.update({
    email : email,
    password : password,
    firstName : first_name,
    lastName : last_name
  },{
    where : {
      email : email
    }
  }).then(data =>{
    return res.send(data);
  })

})

router.get('/me', auth, (req, res) => {
  return res.status(200).json({
    msg: "succesfully send token",
    user: req.user
  });
})

module.exports = router;