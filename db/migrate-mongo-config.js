const config = {
  mongodb: {
    url: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${
      process.env.MONGO_INITDB_ROOT_PASSWORD
    }@${
      process.env.MONGO_URL || 'localhost'
    }:27017?serverSelectionTimeoutMS=2000&authSource=admin`,
    databaseName: 'user-jobs-api',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs',
};

module.exports = config;
