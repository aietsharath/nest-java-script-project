import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './user.credentials.dto';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
// import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import e from 'express';
import { AddressService } from '../address/address.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { CreateAddressDto } from '../address/address.dto';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    private userRepository: UserRepository,

    private jwtService: JwtService,
  ) {}

  public async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    // return await this.repository.createUser(authCredentialsDto);
    return this.userRepository.createUser(authCredentialsDto);
  }
  public async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { userName, password, id } = authCredentialsDto;
    const user = await this.repository.findOneById(id);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { id };
      const accessToken: string = await this.jwtService.sign(payload);
      return accessToken;
    } else {
      throw new UnauthorizedException("Please check you'r login credential's");
    }
  }

  public getUser(id: number): Promise<User> {
    return this.repository.findOneById(id);
  }
  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();
    // console.log(body);

    user.userName = body.userName;
    user.password = body.password;
    user.plotDimension = body.plotDimension;
    // user.address = body.address;
    // user.samplings = [];
    // console.log(user);

    //i need to go address service and extract the user.id and place it in find condition...
    //this user is moved to there in the address service...

    let used = this.repository.save(user);
    return used;
  }
  public getAllUser(): Promise<User[]> {
    return this.repository.find();
  }
}
