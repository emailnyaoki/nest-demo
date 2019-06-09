import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBuildingDto } from './dto/building.dto';
import { BuildingService } from './building.service';
import { Building } from './interface/building.interface';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  async create(@Body() createBuildingDto: CreateBuildingDto) {
    this.buildingService.create(createBuildingDto);
  }

  @Get()
  async findAll(): Promise<Building[]> {
    return this.buildingService.findAll();
  }
}
