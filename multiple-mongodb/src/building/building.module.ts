import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BuildingController } from './building.controller';
import { BuildingService } from './building.service';
import { buildingsProviders } from './building.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BuildingController],
  providers: [BuildingService, ...buildingsProviders],
})
export class BuildingModule {}
