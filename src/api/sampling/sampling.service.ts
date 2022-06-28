import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../address/address.entity';
import { CreateSamplingDto } from './sampling.dto';
import { Sampling } from './sampling.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class SamplingService {
  @InjectRepository(Sampling)
  private readonly repository: Repository<Sampling>;
  @InjectRepository(Address)
  private readonly addressRepository: Repository<Address>;
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;
  public async createSampling(body: CreateSamplingDto): Promise<Sampling> {
    // let user = await this.userRepository.findOne({ where: { id: 16 } }

    const samplingOne: Sampling = new Sampling();
    samplingOne.name = body.name;
    samplingOne.description = body.description;
    samplingOne.quantity = body.quantity;

    // samplingOne.address = add;

    // sampling.userId = body.userId;
    const samplingTwo: Sampling = new Sampling();
    samplingTwo.name = 'sitapala';
    samplingTwo.description = 'traditional fruit';
    samplingTwo.quantity = 3;
    // samplingTwo.address = add;
    // const address: Address = new Address();
    let add = await this.addressRepository.findOne({ where: { id: 35 } });
    console.log(add);

    samplingOne.address = add.id;
    samplingTwo.address = add.id;
    // add.id = samplingTwo;
    // sampling.userId = body.userId;
    await this.repository.save(samplingOne);

    return await this.repository.save(samplingTwo);
  }

  public getAllSampling(): Promise<Sampling[]> {
    return this.repository.find();
  }
  public getSampling(sid: number): Promise<Sampling> {
    return this.repository.findOneById(sid);
  }
  public async updateQuantity(
    sid: number,
    body: Sampling,
    // quantity: number,
  ): Promise<Sampling> {
    // let update = this.repository.findOneById(sid);
    // console.log(update);
    // console.log(body);
    // console.log(sid);
    // console.log(body);

    let update = await this.repository.findOne({ where: { sid: sid } });
    console.log(sid);
    console.log(update);

    console.log(update.address);
    console.log(update.description);

    // console.log(body.sid);
    // console.log(body.quantity);

    // console.log(update);
    // console.log(update.quantity);
    // console.log(body.quantity);
    // console.log(body.sid);

    // console.log(body.address);
    // console.log(typeof body.address);

    // console.log(update.quantity);

    // console.log(update);
    console.log(body.address);

    let findAddress = await this.addressRepository.findOne({
      where: { id: body.address },
    });

    let uid = findAddress.id;
    console.log(uid);

    // console.log(findAddress);
    const user: User = new User();
    let address: number = user.address;
    let findUser = await this.userRepository.findOne({
      where: { address: uid },
    });
    console.log(findUser.id);

    // console.log(uid);
    // console.log(findUser);
    // await this.repository.save(body);
    if (findUser.plotDimension == '1200') {
      return {
        sid: update.sid,
        description: 'you will get six sampling',
        name: update.name,
        quantity: update.quantity,
        address: update.address,
      };
    }

    if (findUser.plotDimension == '2400') {
      return {
        sid: update.sid,
        description: 'you will get eight sampling',
        name: update.name,
        quantity: update.quantity,
        address: update.address,
      };
    }
    if (findUser.plotDimension == '4000') {
      return {
        sid: update.sid,
        description: 'you will get ten sampling',
        name: update.name,
        quantity: update.quantity,
        address: update.address,
      };
    }
    if (findUser.plotDimension == '8000') {
      return {
        sid: update.sid,
        description: 'you will get twele sampling',
        name: update.name,
        quantity: update.quantity,
        address: update.address,
      };
    }

    if (findUser.plotDimension == '600') {
      console.log(findUser.plotDimension);

      return {
        sid: update.sid,
        description: 'you will get four sampling',
        name: update.name,
        quantity: null,
        address: update.address,
      };
    }
    if (findUser.plotDimension < '600') {
      return {
        sid: update.sid,
        description: 'sorry youre not eligible for sampling',
        name: update.name,
        quantity: update.quantity,
        address: update.address,
      };
    }
    return await this.repository.save(body);
  }
}
