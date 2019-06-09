import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from './roles.decorator';
import { LoggingInterceptor } from 'src/logging.interceptor';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles('admin')
  // 传递是实例，如果可以最好传递类而不是实例，可以删少内存使用量
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, 403);
    return this.catsService.findAll();
  }
}
