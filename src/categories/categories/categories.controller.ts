import { Controller, Get } from '@nestjs/common';
import { Categories } from '../categories/categories.entity';
import { CategoriesService } from '../categories/categories.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    index(): Promise<Categories[]> {
      return this.categoriesService.findAll();;
    }  

    @Post()
    async create(@Body() contactData: Categories): Promise<any> {
      return this.categoriesService.create(contactData);
    }  

    @Put(':id')
    async update(@Param('id') id, @Body() categoryData: Categories): Promise<any> {
        categoryData.id = Number(id);
        console.log('Update #' + categoryData.id)
        return this.categoriesService.update(categoryData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.categoriesService.delete(id);
    }  

}
