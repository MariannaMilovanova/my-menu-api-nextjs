import { Module } from '@nestjs/common';
import { RestaurantController } from '@app/restaurant/restaurant.controller';
import { RestaurantService } from '@app/restaurant/restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '@app/restaurant/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
