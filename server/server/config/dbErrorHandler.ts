import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function dbErrorHandler(res: Response, err: any){
  console.log(`Erro: ${err}`);
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
    code: 'Err-01',
    messageUser: 'Erro ao criar usuário',
  });
}
