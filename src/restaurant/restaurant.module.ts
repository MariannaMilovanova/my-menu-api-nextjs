import { Module } from '@nestjs/common';
import { RestaurantController } from '@app/restaurant/restaurant.controller';
import { RestaurantService } from '@app/restaurant/restaurant.service';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
