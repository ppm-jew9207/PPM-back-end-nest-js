const dotenv = require('dotenv');
dotenv.config();

const config = {
  mongodb: {
    url: process.env.MONGO_DB,

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
