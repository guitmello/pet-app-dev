import { IAnimal, IAnimalDetail, createAnimal, createAnimals, createAnimalById } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Animal implements IAnimal {
  public cd_animal_pk: number;
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
      order: ['cd_animal_pk']
    })
    .then(createAnimals);
  }

  getById(cd_animal_pk: number): Bluebird<IAnimalDetail>{
    return model.Animal.findOne({
      where: { cd_animal_pk }
    })
    .then(createAnimalById);
  }

  update(cd_animal_pk: number, animal: any){
    return model.Animal.update(animal, {
      where: { cd_animal_pk },
      fields: ['nm_animal','cd_idade_animal','nm_cor_animal','ic_deficiencia_animal','ds_deficiencia_animal','ds_foto_animal','cd_especie_fk','cd_raca_fk','cd_usuario_fk'],
      hooks: true,
      individualHooks: true
    });
  }

  delete(cd_animal_pk: number){
    return model.Animal.destroy({
      where: { cd_animal_pk }
    });
  }
}

export default Animal;
