import * as mongoose from 'mongoose';

export const BuildingSchema = new mongoose.Schema({
  name: String,
  hight: Number,
});
