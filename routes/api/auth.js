const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const validator = require('validator');
const jwt = require('jsonwebtoken');


const User = require('../../models').User;

// router.post('/', (req, res)=>{
//     const { email, password} = req.body;
//     if(!validator.isEmail(email+'') || validator.isEmpty(password+'')){
//         return res.status(400).json({msg : "Please enter valid fields"});
//     }

//     User.findOne({where : {email :email}}).then(user=>{
//         if(!user) return res.status(400).json({ msg: 'User Does not exist' });
//         bcrypt.compare(password, user.password)
//         .then(isMatch => {
//           if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//           jwt.sign(
//             { id: user.id },
//             config.get('jwtSecret'),
//             { expiresIn: 3600 },
//             (err, token) => {
//               if(err) throw err;
//               res.json({
//                 token,
//                 user: {
//                   id: user.id,
//                   name: user.name,
//                   email: user.email
//                 }
//               });
//             }
//           )
//         })
//     })
// });


router.get('/user',  (req, res) => {
  User.findByPk(req.user.id)
    .then(user => res.json(user));
});

module.exports = router;