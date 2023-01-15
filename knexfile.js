// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost/frequencia',
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host : process.env.HOST,
      port : process.env.PORT_DATABASE,
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    },
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
};
