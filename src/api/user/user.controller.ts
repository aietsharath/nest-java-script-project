import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCredentialsDto } from './user.credentials.dto';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Inject(UserService)
  private readonly service: UserService;
  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.getUser(id);
  }
  @Get()
  public getAllUser(): Promise<User[]> {
    return this.service.getAllUser();
  }
  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }
  @Post('signUp')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.service.signUp(authCredentialsDto);
  }
  @Post('signIn')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<string> {
    return this.service.signIn(authCredentialsDto);
  }
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
  /* @Post('login')
   async login(
     @Body('userName') userName: string,
     @Body('password') password: string,
   ) {
   const user = await this.service.getUser(userName);
       if(!user){
   throw new BadRequestException("invalid crendential's")
       }
       if(await .compare)
     }
    */
}
