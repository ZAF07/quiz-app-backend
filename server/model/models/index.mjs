import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';
import url from 'url';

import initChoiceModel from './JsChoice.mjs';
import initQuestionModel from './JsQuestion.mjs';
import initBackendChoiceModel from './BackendChoice.mjs';
import initBackendQuestionModel from './BackendQuestion.mjs'
import initSqlChoiceModel from './SqlChoice.mjs';
import initSqlQuestionModel from './SqlQuestion.mjs'

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

if (env === 'production') {
  // Break apart the Heroku database url and rebuild the configs we need
  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(
    dbUrl.auth.indexOf(':') + 1,
    dbUrl.auth.length
  );
  const dbName = dbUrl.path.slice(1);
  const host = dbUrl.hostname;
  const { port } = dbUrl;
  config.host = host;
  config.port = port;
  sequelize = new Sequelize(dbName, username, password, config);
}

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.JsChoice = initChoiceModel(sequelize, Sequelize.DataTypes);
db.JsQuestion = initQuestionModel(sequelize, Sequelize.DataTypes);

db.BackendChoice = initBackendChoiceModel(sequelize, Sequelize.DataTypes);
db.BackendQuestion = initBackendQuestionModel(sequelize, Sequelize.DataTypes);

db.SqlChoice = initSqlChoiceModel(sequelize, Sequelize.DataTypes);
db.SqlQuestion = initSqlQuestionModel(sequelize, Sequelize.DataTypes);


// The following 2 lines enable Sequelize to recognise the 1-M relationship
// between Item and Category models, providing the mixin association methods.
db.JsChoice.belongsTo(db.JsQuestion);
db.JsQuestion.hasMany(db.JsChoice);

db.BackendChoice.belongsTo(db.JsQuestion);
db.BackendQuestion.hasMany(db.JsChoice);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;