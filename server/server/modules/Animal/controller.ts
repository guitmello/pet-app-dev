import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import Animal from './service';

class AnimalController {

  constructor() {}

  getAll(req: Request, res: Response){
    Animal
      .getAll()
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao buscar todos os animais`))
  }

  createAnimal(req: Request, res: Response){
    Animal
      .create(req.body)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.dbErrorHandler, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao inserir novo animal`))
  }

  getById(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    Animal.getById(userId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Animal não encontrado`))
  }

  updateAnimal(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    const props = req.body;
    Animal.update(userId, props)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao atualizar animal`))
  }

  deleteAnimal(req: Request, res: Response){
    const userId = parseInt(req.params.id);
    Animal.delete(userId)
      .then(_.partial(Handlers.onSuccess, res))
      .catch(_.partial(Handlers.onError, res, `Erro ao deletar animal`))
  }
}

export default new AnimalController();
