// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/practice_dev'
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/practice_prod'
  }

};
