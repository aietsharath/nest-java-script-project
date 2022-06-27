import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  public siteNumber: string;
  @IsString()
  public completeAddress: string;
  @IsString()
  public floor: string;
  @IsString()
  public nearByLandMark: string;
}
