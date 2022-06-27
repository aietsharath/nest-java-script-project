import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
