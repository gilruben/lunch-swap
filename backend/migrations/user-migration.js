module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'username');
  }
}
