module.exports = {
  up: function(queryInterface, Sequelize) {
    let pw = 'password'
    return queryInterface.bulkInsert('users', [
      {
        email: 'gil.r419@gmail.com',
        password: pw,
        first_name: 'Ruben',
        last_name: 'Gil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'janeKim111@gmail.com',
        password: pw,
        first_name: 'Jane',
        last_name: 'Kim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'chewy@gmail.com',
        password: pw,
        first_name: 'Chewy',
        last_name: 'Gil',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
}
