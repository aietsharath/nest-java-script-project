import { Address } from '../address/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Optional, Options } from '@nestjs/common';
import { takeLast } from 'rxjs';
import { Sampling } from '../sampling/sampling.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ type: 'varchar', length: 120, unique: true })
  public userName: string;

  @Column({ type: 'varchar', length: 120 })
  public password: string;

  @Column({ type: 'varchar', length: 120 })
  public plotDimension: string;
  // @Column()
  @Optional()
  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
  // @OneToMany((_type) => Sampling, (sampling) => sampling.userId, {
  //   eager: true,
  // })
  // samplings: Sampling[];
}
