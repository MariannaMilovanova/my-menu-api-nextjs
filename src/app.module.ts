import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { RestaurantModule } from '@app/restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
