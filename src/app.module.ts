import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { RestaurantModule } from '@app/restaurant/restaurant.module';

@Module({
  imports: [RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
