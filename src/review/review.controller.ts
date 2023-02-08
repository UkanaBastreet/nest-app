import { ReviewModel } from './review.model';
import { Body, Delete, Post, Param, Get } from '@nestjs/common/decorators';
import { Controller } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    console.log(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param(':productId') productId: string) {
    console.log(productId);
  }
}
