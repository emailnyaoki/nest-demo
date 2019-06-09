import { Document } from 'mongoose';

export interface Building extends Document {
  readonly name: string;
  readonly hight: number;
}
