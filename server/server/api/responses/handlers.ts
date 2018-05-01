import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';
//import * as bcrypt from 'bcrypt';
const config = require('../../config/env/config')();


class Handlers {

  authFail(req: Request, res: Response) {
    res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }

  authSuccess(res: Response, credentials: any, data: any) {
    //const isMatch = bcrypt.compareSync(credentials.cd_senha_usuario, data.cd_senha_usuario);
    const isMatch = (credentials.password == data.password);

    if (isMatch) {
      const payload = {
        id: data.id
      };
      res.json({
        token: jwt.encode(payload, config.secret)
      });
    } else {
      res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
  }

  onError(res: Response, message: string, err: any) {
    console.log(`Error: ${err}`);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
  }

  onSuccess(res: Response, data: any) {
    res.status(HTTPStatus.OK).json({
      payload: data
    });
  }

  errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler foi executado: ${err}`);
    res.status(500).json({
      errorCode: 'ERR-001',
      message: 'Erro interno no servidor'
    });
  }

  dbErrorHandler(res: Response, err: any){
    console.log(`Erro: ${err}`);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      code: 'Err-01',
      messageUser: 'Erro ao criar usuário',
    });
  }
}

export default new Handlers();