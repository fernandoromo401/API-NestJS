import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity({name: "dbz_movie"})
export class PeliculaEntity {
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    @Column({name: 'titulo'})
    titulo: string
    @Column({name: 'subtitulo'})
    subtitulo: string
    @Column({name: 'img_url'})
    imgUrl: string
    @Column({name: 'url'})
    url: string
}
