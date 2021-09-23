module.exports = {
  development: {
    username: 'zaffere',
    password: null,
    database: 'quiz_app',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
    production: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  },

};
// postgres://unvgangnzrxdor:804abe4ee190833e028d99ee78fcf1aa01ad0d17eab48f1339e852950aa845dc@ec2-54-145-110-118.compute-1.amazonaws.com:5432/d6hgjattof63aj