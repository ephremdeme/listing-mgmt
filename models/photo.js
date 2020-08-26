'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: DataTypes.STRING,
    listingId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    
  };
  return Photo;
};