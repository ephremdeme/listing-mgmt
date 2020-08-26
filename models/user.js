'use strict';
const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tokens: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Comment);
  };

  User.generateToken = function (user) {
    const token = jwt.sign({
      email: user.email
    }, config.get('jwtSecret'));
    user.tokens = token;
    user.save().then(() => {
      console.log('saved user');
    }).catch(err => {
      throw err;
    })
    return token;
  }
  return User;
};