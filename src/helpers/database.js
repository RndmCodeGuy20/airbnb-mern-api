import mongoose from 'mongoose';
import { logger } from '#helpers/index';
import { envConfig } from '#configs/env.config';

export const getConnection = async () => {
  try {
    const mongoUri = `mongodb://${envConfig.DB_HOST}:${envConfig.DB_PORT}/${envConfig.DB_USER}`;
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    logger.info('Connected to database');
  } catch (err) {
    logger.error(err);
  }
};

