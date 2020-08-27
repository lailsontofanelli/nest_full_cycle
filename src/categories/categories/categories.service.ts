import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>,
    ) { }

    async  findAll(): Promise<Categories[]> {
        return await this.categoriesRepository.find();
    }

    async  create(category: Categories): Promise<Categories> {
        return await this.categoriesRepository.save(category);
    }

    async update(category: Categories): Promise<UpdateResult> {
        return await this.categoriesRepository.update(category.id, category);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.categoriesRepository.delete(id);
    }

}
