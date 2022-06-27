import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../address/address.entity';
import { SamplingController } from './sampling.controller';
import { Sampling } from './sampling.entity';

import { SamplingService } from './sampling.service';
@Module({
  imports: [TypeOrmModule.forFeature([Sampling, Address])],
  controllers: [SamplingController],
  providers: [SamplingService],
})
export class SamplingModuele {}
