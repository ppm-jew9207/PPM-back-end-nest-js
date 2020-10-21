const dotenv = require('dotenv');
dotenv.config();

const config = {
  mongodb: {
    url: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',

    databaseName: process.env.DB_NAME || 'PPM',

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
