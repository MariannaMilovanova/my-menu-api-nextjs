import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantService {
  findAll(): string[] {
    return ['dragons', 'coffee'];
  }
}
