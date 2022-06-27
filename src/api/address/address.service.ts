import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateAddressDto } from './address.dto';
import { Address } from './address.entity';
import { UserService } from '../user/user.service';
const user = require('../user/user.entity');
@Injectable()
export class AddressService {
  @InjectRepository(Address)
  private readonly repository: Repository<Address>;
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;
  public getAddress(id: number): Promise<Address> {
    return this.repository.findOneById(id);
  }
  public async createAddress(body: CreateAddressDto) {
    const address: Address = new Address();
    // const user: User = new User();
    // console.log(user);

    address.siteNumber = body.siteNumber;
    // address.plotDimension = body.plotDimension;
    address.completeAddress = body.completeAddress;
    address.floor = body.floor;
    address.nearByLandMark = body.nearByLandMark;
    let createdAddress = await this.repository.save(address);

    this.userRepository.create({}); //ashwin

    let user = await this.userRepository.findOne({ where: { id: 16 } });

    console.log(user);

    user.address = address;
    // console.log(uses);

    // console.log(user);

    // return createdAddress;
    // let user = await this.userRepository.findOne({ where: { id: '13' } });
    // user.address = createdAddress;
    // console.log(user);
    await this.userRepository.save(user);
    return address;
    // return user;
  }
}
