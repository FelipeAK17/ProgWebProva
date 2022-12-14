import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('filmes_favoritos')
export default class FavoriteMoviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  title: string;

  @Column({ name: 'imagem', type: 'varchar' })
  image: string;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updateAt: Date;

  @Column({ name: 'user_id', type: 'integer' })
  user_id: number;
}
