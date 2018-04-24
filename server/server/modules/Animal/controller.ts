import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';
import Animal from './service';

class AnimalController {

  constructor() {}

  getAll(req: Request, res: Response){
    Animal
      .getAll()
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao buscar todos os animais`))
  }

  createAnimal(req: Request, res: Response){
    Animal
      .create(req.body)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(dbErrorHandler, res))
      .catch(_.partial(onError, res, `Erro ao inserir novo animal`))
  }

  getById(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    Animal.getById(userId)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Animal não encontrado`))
  }

  updateAnimal(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    const props = req.body;
    Animal.update(userId, props)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao atualizar animal`))
  }

  deleteAnimal(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    Animal.delete(userId)
      .then(_.partial(onSuccess, res))
      .catch(_.partial(onError, res, `Erro ao deletar animal`))
  }
}

export default new AnimalController();
