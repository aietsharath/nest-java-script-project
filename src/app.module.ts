import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ApiModule } from './api/api.module';
import { UserModule } from './api/user/user.module';
import { AddressModule } from './api/address/address.module';
import { SamplingModuele } from './api/sampling/sampling.module';
// import { ModuleRef } from '@nestjs/core';
// import { ModuleRefModule } from './module.ref';
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule,
    UserModule,
    AddressModule,
    SamplingModuele,

    // ModuleRefModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
