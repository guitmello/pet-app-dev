export class Pet {
    cd_animal?: number;
    nm_animal?: string;
    cd_idade_animal?: number;
    nm_cor_animal?: string;
    nm_tamanho_animal: string;
    ic_deficiencia_animal?: boolean;
    ds_deficiencia_animal?: string;
    nm_sexo_animal?: string;
    ds_foto_animal: string;
    cd_especie_fk?: number;
    nm_especie_animal?: string;
    cd_raca_fk?: number;
    nm_raca_animal?: string;
    cd_usuario_fk: string;

    payload: {
        cd_animal?: number;
        nm_animal?: string;
        cd_idade_animal?: number;
        nm_cor_animal?: string;
        nm_tamanho_animal: string;
        ic_deficiencia_animal?: boolean;
        ds_deficiencia_animal?: string;
        nm_sexo_animal?: string;
        ds_foto_animal: string;
        cd_especie_fk?: number;
        nm_especie_animal?: string;
        cd_raca_fk?: number;
        nm_raca_animal?: string;
        cd_usuario_fk: string;
    };
}
