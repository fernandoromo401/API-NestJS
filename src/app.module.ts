import { Module } from '@nestjs/common';

import { PeliculaModule } from './module/pelicula.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';




@Module({
  imports: [PeliculaModule, TypeOrmModule.forRoot(
    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "peliculas",
      "entities": [join(__dirname, "./**/*.entity{.ts,.js}")],
      "synchronize": true
  }
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
