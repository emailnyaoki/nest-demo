import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BuildingModule } from './building/building.module';

@Module({
  imports: [CatsModule, BuildingModule],
})
export class ApplicationModule {}
