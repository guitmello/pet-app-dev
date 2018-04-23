import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';
import User from './service';

class UserController {

  constructor() {}

  getAll(req: Request, res: Response){
    User
      .getAll()
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao buscar todos os usuários`))
  }

  create(req: Request, res: Response){
    User
      .create(req.body)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(dbErrorHandler, res))
      .catch(_.partial(onError, res, `Erro ao inserir novo usuário`))
  }

  getById(req: Request, res: Response){
    const userId = parseInt(req.params.cd_usuario_pk);
    User.getById(userId)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Usuário não encontrado`))
  }

  updateUser(req: Request, res: Response){
    const userId = parseInt(req.params.cd_usuario_pk);
    const props = req.body;
    User.update(userId, props)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao atualizar usuário`))
  }

  deleteUser(req: Request, res: Response){
    const userId = parseInt(req.params.cd_usuario_pk);
    User.delete(userId)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao deletar usuário`))
  }
}

export default new UserController();
