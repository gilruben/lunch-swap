"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {

        User.belongsToMany(User, {
          as: 'friend',
          through: "Friends"
        });

        User.hasMany(models.lunch);
      }
    }
  });

  return User;
};
