const dotenv = require('dotenv');
dotenv.config();
const result = dotenv.config();
const envs = result.parsed;

const config = {
  mongodb: {
    url: envs.MONGO_DB_HOST,

    databaseName: envs.DB_NAME,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3600000,
      socketTimeoutMS: 3600000,
    },
  },

  migrationsDir: 'migrations',

  changelogCollectionName: 'migrations',
};
module.exports = config;
