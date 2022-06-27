import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Address } from '../address/address.entity';
import { Sampling } from '../sampling/sampling.entity';

export class CreateUserDto {
  @IsString()
  public userName: string;
  @IsString()
  public password: string;
  @IsString()
  public plotDimension: string;
  @IsOptional()
  // @IsNotEmpty()
  public address: Address;
  // @IsOptional()
  // public samplings: Sampling[];
}
