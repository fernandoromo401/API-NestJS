import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PeliculaEntity } from 'src/entity/pelicula.entity';
import { PeliculaService } from 'src/service/pelicula.service';

@Controller('pelicula')
export class PeliculaController {

    constructor(private peliculaService: PeliculaService){}
    
    @Get('/all')
    getAll(): Promise<PeliculaEntity[]>{
        return this.peliculaService.findAll()
    }

    @Get('title/:type')
    getTitle(@Param('type') type: number){
        return this.peliculaService.findAllTitle(type)
    }
    
    @Get('/:id')
    getOne(@Param() id: number): Promise<PeliculaEntity>{
        return this.peliculaService.findOne(id)
    }

    @Get('/')
    movieCount(): Promise<any>{
        return this.peliculaService.count();
    }

    @Post()
    saveMovie(@Body() pelicula: PeliculaEntity[]): Promise<PeliculaEntity[]>{
        return this.peliculaService.save(pelicula)
    }

    @Delete('/:id')
    deleteMovie(@Param() id: number){
        return this.peliculaService.delete(id)
    }
}
