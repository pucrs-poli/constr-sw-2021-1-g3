import mongoose from 'mongoose';

const connection = {
  dev: {
    url: `mongodb://${process.env.MONGO_DB_IP}/curricula`,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
  prod: {
    url: `mongodb://mongo:27017/curricula`,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      auth: {
        authSource: "admin"
      },
      user: "root",
      pass: "12344321"
    },
  },
};

const mongoConfig =
  process.env.NODE_ENV === 'production' ? connection.prod : connection.dev;

mongoose.connect(mongoConfig.url, mongoConfig.options);

mongoose.Promise = global.Promise;

export default mongoose.connection;
