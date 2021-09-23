module.exports = {
  development: {
    username: 'zaffere',
    password: null,
    database: 'quiz_app',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  //   production: {
  //   host: 'ec2-54-145-110-118.compute-1.amazonaws.com',
  //   dialect: 'postgres',
  //   username: 'unvgangnzrxdor',
  //   password: '804abe4ee190833e028d99ee78fcf1aa01ad0d17eab48f1339e852950aa845dc',
  //   database: 'd6hgjattof63aj',
  //   use_env_variable: process.env.DATABASE_URL,
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false,
  //     }
  //   }
  // },
  production: {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: { // https://github.com/sequelize/sequelize/issues/12083
      require: true,
      rejectUnauthorized: false,
    },
  },
},

};
// postgres://unvgangnzrxdor:804abe4ee190833e028d99ee78fcf1aa01ad0d17eab48f1339e852950aa845dc@ec2-54-145-110-118.compute-1.amazonaws.com:5432/d6hgjattof63aj