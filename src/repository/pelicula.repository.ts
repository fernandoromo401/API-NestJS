import { Repository, EntityRepository } from "typeorm";
import { PeliculaEntity } from "src/entity/pelicula.entity";

@EntityRepository(PeliculaEntity)
export class PeliculaRepository extends Repository<PeliculaEntity> {
    
}
