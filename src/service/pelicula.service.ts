import { Injectable, Body } from '@nestjs/common';
import { PeliculaRepository } from 'src/repository/pelicula.repository';
import { PeliculaEntity } from 'src/entity/pelicula.entity';

@Injectable()
export class PeliculaService {
    constructor(private readonly peliculaRepository: PeliculaRepository){}

    findAll(): Promise<PeliculaEntity[]>{
        return this.peliculaRepository.find()
    }
    findOne(id: number): Promise<PeliculaEntity>{
        return this.peliculaRepository.findOne(id)
    }
    findAllTitle(type): Promise<PeliculaEntity[]> {
        let filtro
        switch(type){
            case ('1'):
                filtro = 'Dragon Ball'
                break
            case ('2'):
                filtro = 'Dragon Ball Z'
                break
            case ('3'):
                filtro = 'Dragon Ball GT'
                break
            case ('4'):
                filtro = 'Dragon Ball Super'
                break
        }
        return this.peliculaRepository.find({ where: { titulo: filtro } })
    }
    count(): Promise<any>{
        let resultado;
        let valor = this.peliculaRepository.count()
        .then(data => {
            resultado = data
            let cantidad = {
                "cantidad": resultado,
                "mensaje": 'Resultado'
            }
            console.log(cantidad)
            return cantidad
        })
        return valor   
    }
    save(pelicula: PeliculaEntity[]): Promise<PeliculaEntity[]>{
        return this.peliculaRepository.save(pelicula)
    }
    delete(id: number){
        return this.peliculaRepository.delete(id)
    }
}
