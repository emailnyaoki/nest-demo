import { Connection } from 'mongoose';
import { BuildingSchema } from './schemas/building.schema';

export const buildingsProviders = [
  {
    provide: 'BUILDING_MODEL',
    useFactory: (connection: Connection) => connection.model('Building', BuildingSchema),
    inject: ['DATABASE_TWO_CONNECTION'],
  },
];
