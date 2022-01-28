import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '@app/restaurant/restaurant.service';
import { RestaurantEntity } from '@app/restaurant/restaurant.entity';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<RestaurantEntity[]> {
    return await this.restaurantService.findAll();
  }
}
