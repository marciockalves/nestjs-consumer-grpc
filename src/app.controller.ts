import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { IResponseDto } from './infraestructure/IResponseDto';
import { GrpcMethod } from '@nestjs/microservices';
import { IUsersDto } from './infraestructure/IuserDto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppService', 'CreateUser')
  async creatUser(data: IUsersDto): Promise<IResponseDto> {
      const result = await this.appService.createUser(data);

        return result;
  }
}
