export interface IAnimal {
  readonly id: number,
  nm_animal: string,
  cd_idade_animal: number,
  nm_cor_animal: string,
  ic_deficiencia_animal: boolean,
  ds_deficiencia_animal: string,
  ds_foto_animal: string,
  cd_especie_fk: number,
  cd_raca_fk: number,
  cd_usuario_fk: number
}

export interface IAnimalDetail extends IAnimal{
  id: number,
  nm_animal: string,
  cd_idade_animal: number,
  nm_cor_animal: string,
  ic_deficiencia_animal: boolean,
  ds_deficiencia_animal: string,
  ds_foto_animal: string,
  cd_especie_fk: number,
  cd_raca_fk: number,
  cd_usuario_fk: number
}

export function createAnimal({ id, nm_animal, cd_idade_animal, nm_cor_animal, ic_deficiencia_animal, ds_deficiencia_animal, ds_foto_animal, cd_especie_fk, cd_raca_fk, cd_usuario_fk }: any): IAnimal {
    return {
      id, nm_animal, cd_idade_animal, nm_cor_animal, ic_deficiencia_animal, ds_deficiencia_animal, ds_foto_animal, cd_especie_fk, cd_raca_fk, cd_usuario_fk
    }
}

export function createAnimals(data: any[]): IAnimal[]{
  return data.map(createAnimal)
}

export function createAnimalById({ id, nm_animal, cd_idade_animal, nm_cor_animal, ic_deficiencia_animal, ds_deficiencia_animal, ds_foto_animal, cd_especie_fk, cd_raca_fk, cd_usuario_fk }: any): IAnimalDetail {
    return {
      id, nm_animal, cd_idade_animal, nm_cor_animal, ic_deficiencia_animal, ds_deficiencia_animal, ds_foto_animal, cd_especie_fk, cd_raca_fk, cd_usuario_fk
    }
}
