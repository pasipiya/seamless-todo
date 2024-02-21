import mongoose, { Connection, ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import logger from "../logger";

const opts: ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
} as ConnectOptions;

let mongoServer: MongoMemoryServer; // Declare mongoServer outside the connect function
let mongoConnection: Connection | null = null;

// Provide connection to a new in-memory database server.
export const connect = async (): Promise<void> => {
  // NOTE: before establishing a new connection close previous
  if (mongoConnection) {
    await mongoConnection.close();
  }

  mongoServer = await MongoMemoryServer.create();

  const mongoUri = await mongoServer.getUri();
  mongoConnection = await mongoose.createConnection(mongoUri, opts);

  logger.info("🔌️ Database Connection has been established successfully!");
};

// Remove and close the database and server.
export const close = async (): Promise<void> => {
  if (mongoConnection) {
    await mongoConnection.close();
    logger.info("🔌️ Database Connection has been closed successfully!");
  }
  if (mongoServer) {
    await mongoServer.stop();
    logger.info("🔌️ Database Connection has been stopped successfully!");
  }
};

// Remove all data from collections
export const clear = async (): Promise<void> => {
  if (mongoConnection) {
    const collections = mongoConnection.collections;

    for (const key in collections) {
      await collections[key].deleteMany({});
    }
    logger.info("🔌️ Database Connection has been cleared successfully!");
  }
};

module.exports = {
    connect,
    close,
    clear,
  };