import { Controller, Get, Req, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // 路由注册顺序很重要，把这个放在 :id 这个路由下面
  // 这个路由就不会被调用，要放在最前面
  @Get()
  getCats(@Req() resuest: Request): string {
    return this.catsService.getCats();
  }

  // async / await 写法也是被支持的
  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

  // 可以指定一个 params 对象
  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} cat`;
  }

  // 也可以指定具体的参数，直接声明成变量
  @Get(':name')
  findOneCat(@Param('name') name): string {
    return `This action returns a ${name} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
