import { IAnimal, IAnimalDetail, createAnimal, createAnimals, createAnimalById } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Animal implements IAnimal {
  public id: number;
  public nm_animal: string;
  public cd_idade_animal: number;
  public nm_cor_animal: string;
  public ic_deficiencia_animal: boolean;
  public ds_deficiencia_animal: string;
  public ds_foto_animal: string;
  public cd_especie_fk: number;
  public cd_raca_fk: number;
  public cd_usuario_fk: number;

  constructor(){}

  create(animal: any){
    return model.Animal.create(animal);
  }

  getAll(): Bluebird<IAnimal[]>{
    return model.Animal.findAll({
      order: ['id']
    })
    .then(createAnimals);
  }

  getById(id: number): Bluebird<IAnimalDetail>{
    return model.Animal.findOne({
      where: { id }
    })
    .then(createAnimalById);
  }

  update(id: number, animal: any){
    return model.Animal.update(animal, {
      where: { id },
      fields: ['nm_animal','cd_idade_animal','nm_cor_animal','ic_deficiencia_animal','ds_deficiencia_animal','ds_foto_animal','cd_especie_fk','cd_raca_fk','cd_usuario_fk'],
      hooks: true,
      individualHooks: true
    });
  }

  delete(id: number){
    return model.Animal.destroy({
      where: { id }
    });
  }
}

export default new Animal();
