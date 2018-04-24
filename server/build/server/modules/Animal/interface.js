"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAnimal(_a) {
    var id = _a.id, nm_animal = _a.nm_animal, cd_idade_animal = _a.cd_idade_animal, nm_cor_animal = _a.nm_cor_animal, ic_deficiencia_animal = _a.ic_deficiencia_animal, ds_deficiencia_animal = _a.ds_deficiencia_animal, ds_foto_animal = _a.ds_foto_animal, cd_especie_fk = _a.cd_especie_fk, cd_raca_fk = _a.cd_raca_fk, cd_usuario_fk = _a.cd_usuario_fk;
    return {
        id: id, nm_animal: nm_animal, cd_idade_animal: cd_idade_animal, nm_cor_animal: nm_cor_animal, ic_deficiencia_animal: ic_deficiencia_animal, ds_deficiencia_animal: ds_deficiencia_animal, ds_foto_animal: ds_foto_animal, cd_especie_fk: cd_especie_fk, cd_raca_fk: cd_raca_fk, cd_usuario_fk: cd_usuario_fk
    };
}
exports.createAnimal = createAnimal;
function createAnimals(data) {
    return data.map(createAnimal);
}
exports.createAnimals = createAnimals;
function createAnimalById(_a) {
    var id = _a.id, nm_animal = _a.nm_animal, cd_idade_animal = _a.cd_idade_animal, nm_cor_animal = _a.nm_cor_animal, ic_deficiencia_animal = _a.ic_deficiencia_animal, ds_deficiencia_animal = _a.ds_deficiencia_animal, ds_foto_animal = _a.ds_foto_animal, cd_especie_fk = _a.cd_especie_fk, cd_raca_fk = _a.cd_raca_fk, cd_usuario_fk = _a.cd_usuario_fk;
    return {
        id: id, nm_animal: nm_animal, cd_idade_animal: cd_idade_animal, nm_cor_animal: nm_cor_animal, ic_deficiencia_animal: ic_deficiencia_animal, ds_deficiencia_animal: ds_deficiencia_animal, ds_foto_animal: ds_foto_animal, cd_especie_fk: cd_especie_fk, cd_raca_fk: cd_raca_fk, cd_usuario_fk: cd_usuario_fk
    };
}
exports.createAnimalById = createAnimalById;
