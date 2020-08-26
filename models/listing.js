'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    nrooms: DataTypes.INTEGER,
    address: DataTypes.JSON,
    features: DataTypes.JSON
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.hasMany(models.Photo, {as : 'images'})
    Listing.hasMany(models.Comment);
  };
  return Listing;
};