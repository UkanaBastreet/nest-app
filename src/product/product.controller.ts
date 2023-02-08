import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import {
  Body,
  Delete,
  Param,
  Patch,
  Post,
  HttpCode,
} from '@nestjs/common/decorators';
import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {
    console.log(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    console.log(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {
    console.log(id, dto);
  }
  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    console.log(dto);
  }
}
