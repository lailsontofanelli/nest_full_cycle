import { Module } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './categories/categories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categories]),
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
