import { Controller, Get, Req, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from '../interfaces/cat.interface';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
