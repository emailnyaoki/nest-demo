import { Injectable, Inject } from '@nestjs/common';
import { Building } from './interface/building.interface';
import { Model } from 'mongoose';
import { CreateBuildingDto } from './dto/building.dto';

@Injectable()
export class BuildingService {
  constructor(@Inject('BUILDING_MODEL') private readonly catModel: Model<Building>) {}

  async create(createBuildingDto: CreateBuildingDto): Promise<Building> {
    const createdCat = new this.catModel(createBuildingDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Building[]> {
    return await this.catModel.find().exec();
  }
}
