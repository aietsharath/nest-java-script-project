import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sampling } from '../sampling/sampling.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('increment')
  public id: number;
  @Column({ type: 'varchar', length: 120 })
  public siteNumber: string;
  // @Column({ type: 'varchar', length: 120 })
  // public plotDimension: string;
  @Column({ type: 'varchar', length: 150 })
  public completeAddress: string;
  @Column({ type: 'varchar', length: 100 })
  public floor: string;
  @Column({ type: 'varchar', length: 100 })
  public nearByLandMark: string;
  // @OneToOne(() => User, (user) => user.address)
  // public userId: string;
  @OneToMany((_type) => Sampling, (sampling) => sampling.address)
  samplings: Sampling[];
}
