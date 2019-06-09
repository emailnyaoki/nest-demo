import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_ONE_CONNECTION',
    useFactory: async (): Promise<mongoose.Connection> =>
      await mongoose.createConnection('mongodb://localhost/nest-cats'),
  },
  {
    provide: 'DATABASE_TWO_CONNECTION',
    useFactory: async (): Promise<mongoose.Connection> =>
      await mongoose.createConnection('mongodb://localhost/nest-building'),
  },
];
