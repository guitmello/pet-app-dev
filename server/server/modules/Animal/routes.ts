import { Request, Response } from 'express';
import AnimalController from './controller';
let AnimalCtlr;

class AnimalRoutes {

  constructor(){
    AnimalCtlr = new AnimalController();
  }

  index(req: Request, res: Response){
    return AnimalCtlr.getAll(req, res);
  }

  create(req: Request, res: Response){
    return AnimalCtlr.createAnimal(req, res);
  }

  findOne(req: Request, res: Response){
    return AnimalCtlr.getById(req, res);
  }

  update(req: Request, res: Response){
    return AnimalCtlr.updateAnimal(req, res);
  }

  destroy(req: Request, res: Response){
    return AnimalCtlr.deleteAnimal(req, res);
  }
}

export default AnimalRoutes;
