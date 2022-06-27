import { Optional } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { User } from '../user/user.entity';
// import { User } from '../user/user.entity';

@Entity()
export class Sampling {
  @PrimaryGeneratedColumn('increment')
  public sid: number;
  @Column({ type: 'varchar', length: 100 })
  public quantity: string;
  @Column({ type: 'varchar', length: 120 })
  public name: string;
  @Column({ type: 'varchar', length: 150 })
  public description: string;

  // @ManyToOne((_type) => User, (user) => user.samplings, { eager: false })
  // public userId: User;

  @ManyToOne((type) => Address, (add) => add.samplings)
  // @JoinColumn()
  address: number;
}
