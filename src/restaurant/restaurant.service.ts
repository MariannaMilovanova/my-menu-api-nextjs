import { Injectable } from '@nestjs/common';
import { RestaurantEntity } from '@app/restaurant/restaurant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepository: Repository<RestaurantEntity>,
  ) {}
  async findAll(): Promise<RestaurantEntity[]> {
    return await this.restaurantRepository.find();
  }
}
