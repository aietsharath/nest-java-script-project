import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { User } from '../user/user.entity';
import { CreateAddressDto } from './address.dto';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  @Inject(AddressService)
  private readonly service: AddressService;
  @Get(':id')
  public getAddress(@Param('id', ParseIntPipe) id: number): Promise<Address> {
    return this.service.getAddress(id);
  }
  @Post()
  public async createAddress(@Body() body: CreateAddressDto): Promise<Address> {
    return await this.service.createAddress(body);
  }
}
