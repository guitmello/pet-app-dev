export interface User {
    id: string;
    nm_tipo_usuario: string;
    nm_usuario?: string;
    nm_razao_social_usuario?: string;
    nm_sexo_usuario?: string;
    dt_nascimento_usuario?: string;
    nm_email_usuario: string;
    cd_cpf_usuario: number;
    cd_cnpj_usuario: number;
    cd_telefone_usuario: number;
    cd_cep_usuario: number;
    nm_estado_usuario: string;
    nm_cidade_usuario: string;
    nm_endereco_usuario: string;
    cd_numero_endereco_usuario: number;
    ds_complemento_endereco_usuario?: string;
    ds_foto_usuario: string;
    cd_senha_usuario: string;
    token: string;
}
