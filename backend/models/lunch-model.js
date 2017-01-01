"use strict";

module.exports = function(sequelize, DataTypes) {
  var Lunch = sequelize.define("lunch", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.JSON
    }
  }, {
    classMethods: {
      associate: function(models) {
        Lunch.belongsTo(models.user, {onDelete: "CASCADE"});
      }
    }
  });

  return Lunch;
};
