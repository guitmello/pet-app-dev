import { Request, Response } from 'express';
import * as _ from 'lodash';
import User from '../User/service';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';


class TokenRoutes {
  
  auth(req: Request, res: Response){
    const credentials = {
      nm_email_usuario: req.body.nm_email_usuario,
      cd_senha_usuario: req.body.cd_senha_usuario
    };

    if(credentials.hasOwnProperty('nm_email_usuario') && credentials.hasOwnProperty('cd_senha_usuario')){
      User
      .getByEmail(credentials.nm_email_usuario)
      .then(_.partial(authSuccess, res, credentials))
      .catch(_.partial(authFail, req, res));
    }
  }
}

export default new TokenRoutes();
