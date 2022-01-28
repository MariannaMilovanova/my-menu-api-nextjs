import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mymenu',
  password: '123',
  database: 'mymenu',
};

export default config;
