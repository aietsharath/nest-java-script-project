import { IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../user/user.entity';
// @Entity()
export class CreateSamplingDto {
  // @IsNumber()
  sid: number;
  // @IsNumber()
  @IsOptional()
  quantity: number;
  // @IsString()
  @IsOptional()
  name: string;
  // @IsString()
  @IsOptional()
  description: string;
  // @IsNumber()
  @IsOptional()
  address: number;
}
