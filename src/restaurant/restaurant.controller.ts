import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '@app/restaurant/restaurant.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }
}
