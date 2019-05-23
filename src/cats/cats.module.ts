import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  // 现在每个导入 CastModule 的模块都可以访问 CatsService，
  // 并且它们将共享相同的 CatsService 实例
  exports: [CatsService],
})
export class CatsModule {}
