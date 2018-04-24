import { Request, Response } from 'express';

class AnimalController {
  constructor() {}

  getAll(req: Request, res: Response){
    res.status(200).json({
      message: 'OK'
    });
  }

  createAnimal(req: Request, res: Response){
    res.status(200).json({
      message: 'OK'
    });
  }

  getById(req: Request, res: Response){
    res.status(200).json({
      message: 'OK'
    });
  }

  updateAnimal(req: Request, res: Response){
    res.status(200).json({
      message: 'OK'
    });
  }

  deleteAnimal(req: Request, res: Response){
    res.status(200).json({
      message: 'OK'
    });
  }
}

export default AnimalController;
