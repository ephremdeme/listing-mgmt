const jwt = require('jsonwebtoken');
const config = require('config'),
      User = require('../models').User;

const auth = async (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorizaton denied'
        });
    }
 
    try {
        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        User.findOne({
            where: {
                email: decoded.email
            },
            attributes : {exclude :['password']}
        }).then(user => {
            req.user = user;
            next();
        })
    } catch (e) {
        return res.status(400).json({
            msg: 'Token is not valid'
        });
    }
}
module.exports = auth;