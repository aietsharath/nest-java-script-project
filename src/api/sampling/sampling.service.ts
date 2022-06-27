import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../address/address.entity';
import { CreateSamplingDto } from './sampling.dto';
import { Sampling } from './sampling.entity';

@Injectable()
export class SamplingService {
  @InjectRepository(Sampling)
  private readonly repository: Repository<Sampling>;
  @InjectRepository(Address)
  private readonly addressRepository: Repository<Address>;
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
    samplingTwo.quantity = '3';
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
}
