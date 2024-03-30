import { Injectable } from '@nestjs/common';
import { IUsersDto } from './infraestructure/IuserDto';
import { IResponseDto } from './infraestructure/IResponseDto';

@Injectable()
export class AppService {
  async createUser(data: IUsersDto): Promise<IResponseDto>{

      const responseOk: IResponseDto = {
        status:'ok',
        message: 'Sucesso'
      } 
      const responseNok: IResponseDto = {
        status:'error',
        message: 'Invalido'
      } 


    return data ? responseOk : responseNok;
  }
}
