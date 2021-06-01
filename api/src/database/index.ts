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
    url: `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_IP}/curricula`,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
};

const mongoConfig =
  process.env.NODE_ENV === 'production' ? connection.prod : connection.dev;

mongoose.connect(mongoConfig.url, mongoConfig.options);

mongoose.Promise = global.Promise;

export default mongoose;
