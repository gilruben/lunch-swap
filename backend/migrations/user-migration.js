module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.renameTable('User', 'user')
  }
}
