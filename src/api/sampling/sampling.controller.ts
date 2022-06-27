import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateSamplingDto } from './sampling.dto';
import { Sampling } from './sampling.entity';
import { SamplingService } from './sampling.service';

@Controller('sampling')
export class SamplingController {
  @Inject(SamplingService)
  private readonly service: SamplingService;
  @Post()
  public createSampling(@Body() body: CreateSamplingDto) {
    return this.service.createSampling(body);
  }
  @Get()
  public getAllSampling(): Promise<Sampling[]> {
    return this.service.getAllSampling();
  }
  @Get('sid')
  public findOneSampling(
    @Param('sid', ParseIntPipe) sid: number,
  ): Promise<Sampling> {
    return this.service.getSampling(sid);
  }
}
