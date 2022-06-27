import { IsOptional, IsString } from 'class-validator';
import { User } from '../user/user.entity';
// @Entity()
export class CreateSamplingDto {
  @IsString()
  quantity: string;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
