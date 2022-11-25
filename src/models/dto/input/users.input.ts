import { ApiProperty } from '@nestjs/swagger';

export default class FavoriteMoviesInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  active: boolean;
  title: string;
  user_id: number;
}
