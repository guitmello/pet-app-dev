import { Request, Response } from 'express';
import AnimalController from './controller';


class AnimalRoutes {

  constructor(){}

  index(req: Request, res: Response){
    return AnimalController.getAll(req, res);
  }

  create(req: Request, res: Response){
    return AnimalController.create(req, res);
  }

  findOne(req: Request, res: Response){
    return AnimalController.getById(req, res);
  }

  update(req: Request, res: Response){
    return AnimalController.updateAnimal(req, res);
  }

  destroy(req: Request, res: Response){
    return AnimalController.deleteAnimal(req, res);
  }
}

export default AnimalRoutes;
