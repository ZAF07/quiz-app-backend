module.exports = {
  development: {
    username: 'zaffere',
    password: null,
    database: 'quiz_app',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
    production: {
    username: 'zaffere',
    password: null,
    database: 'quiz_app',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: DATABASE_URL
  },

};
