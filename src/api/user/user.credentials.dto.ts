import {
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsNumber()
  id: number;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  userName: string;
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  @IsString()
  password: string;
}
