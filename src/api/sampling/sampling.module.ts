import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../address/address.entity';
import { User } from '../user/user.entity';
import { SamplingController } from './sampling.controller';
import { Sampling } from './sampling.entity';

import { SamplingService } from './sampling.service';
@Module({
  imports: [TypeOrmModule.forFeature([Sampling, Address, User])],
  controllers: [SamplingController],
  providers: [SamplingService],
})
export class SamplingModuele {}
