import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculaRepository } from 'src/repository/pelicula.repository';
import { PeliculaService } from 'src/service/pelicula.service';
import { PeliculaController } from 'src/controller/pelicula.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PeliculaRepository])],
    controllers: [PeliculaController],
    providers: [PeliculaService]
    
})
export class PeliculaModule {}
