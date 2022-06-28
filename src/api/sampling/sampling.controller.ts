import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
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
  @Get(':sid')
  public findOneSampling(
    @Param('sid', ParseIntPipe) sid: number,
  ): Promise<Sampling> {
    return this.service.getSampling(sid);
  }
  @Patch('/:sid/updates')
  public updateQuantity(
    @Param('sid', ParseIntPipe) sid: number,
    // @Param('quantity', ParseIntPipe) quantity: number,
    @Body() body: CreateSamplingDto,
  ): Promise<Sampling> {
    // body.sid = Number(sid);

    // body.quantity = Number(quantity);
    // body.quantity = Number(quantity);
    // console.log(body);
    // console.log(body.quantity);
    // console.log(body.sid);

    // console.log('Update correspnding sampling id#' + sid);
    // sid = body.sid;
    // console.log(body.sid);
    // console.log(body);

    // console.log(body.quantity);
    // let quantity = body.quantity;
    // let sid = body.sid;

    return this.service.updateQuantity(sid, body);

    // return this.service.updateQuantity(update, body);
  }
}
