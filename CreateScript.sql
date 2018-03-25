CREATE TABLE ESPECIE (
nm_especie VARCHAR(50),
cd_especie_pk SERIAL PRIMARY KEY
);

CREATE TABLE ANIMAL (
cd_animal_pk SERIAL PRIMARY KEY,
nm_animal VARCHAR(50),
cd_idade_animal INTEGER,
nm_cor_animal VARCHAR(20),
ic_deficiencia_animal BOOLEAN,
ds_deficiencia_animal VARCHAR(100),
cd_especie_fk INTEGER,
cd_raca_fk INTEGER,
cd_usuario_fk INTEGER,
FOREIGN KEY(cd_especie_fk) REFERENCES ESPECIE (cd_especie_pk)
);

CREATE TABLE RACA (
nm_raca VARCHAR(50),
cd_raca_pk SERIAL PRIMARY KEY
);

CREATE TABLE MENSAGEM (
cd_mensagem_pk SERIAL PRIMARY KEY,
cd_chat_fk INTEGER,
ds_mensagem VARCHAR(400),
dt_mensagem DATE
);

CREATE TABLE USUARIO (
nm_tipo_usuario VARCHAR(30),
nm_rua_usuario VARCHAR(50),
cd_numero_usuario INTEGER,
cd_cnpj_usuario BIGINT,
nm_razao_social_usuario VARCHAR(50),
nm_usuario VARCHAR(50),
nm_email_usuario VARCHAR(100),
nm_sexo_usuario CHAR(1),
cd_senha_usuario VARCHAR(30),
cd_cep_usuario INTEGER,
nm_estado_usuario VARCHAR(50),
dt_nascimento_usuario DATE,
nm_cidade_usuario VARCHAR(50),
cd_telefone_usuario BIGINT,
cd_usuario_pk SERIAL PRIMARY KEY,
cd_ip_usuario VARCHAR(30)
);

CREATE TABLE CHAT (
cd_chat_pk SERIAL PRIMARY KEY,
cd_usuario_enviou_fk INTEGER,
cd_usuario_recebeu_fk INTEGER,
cd_ip_usuario_enviou_fk VARCHAR(30),
cd_ip_usuario_recebeu_fk VARCHAR(30),
FOREIGN KEY(cd_usuario_enviou_fk) REFERENCES USUARIO (cd_usuario_pk),
FOREIGN KEY(cd_usuario_recebeu_fk) REFERENCES USUARIO (cd_usuario_pk)
);

ALTER TABLE ANIMAL ADD FOREIGN KEY(cd_raca_fk) REFERENCES RACA (cd_raca_pk);
ALTER TABLE ANIMAL ADD FOREIGN KEY(cd_usuario_fk) REFERENCES USUARIO (cd_usuario_pk);
ALTER TABLE MENSAGEM ADD FOREIGN KEY(cd_chat_fk) REFERENCES CHAT (cd_chat_pk);
