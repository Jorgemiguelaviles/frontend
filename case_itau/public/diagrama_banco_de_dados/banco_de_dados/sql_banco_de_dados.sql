create database caseItau;

show databases;

use caseitau;


show tables;


CREATE TABLE s3 (
    bucket_name VARCHAR(255) NOT NULL,
    object_key  VARCHAR(512) NOT NULL,

    content_type VARCHAR(100),
    nome_original_arquivo VARCHAR(255),
    tamanho BIGINT,
    data_upload DATETIME DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),

    PRIMARY KEY (bucket_name, object_key)
) ENGINE=InnoDB;


CREATE TABLE classificacoes (
    id_classificador CHAR(36) NOT NULL DEFAULT (UUID()),
    nome_classificacao VARCHAR(255) NOT NULL,
    palavra_chave VARCHAR(255),

    PRIMARY KEY (id_classificador)
) ENGINE=InnoDB;


CREATE TABLE textos_classificados (
    id_texto CHAR(36) NOT NULL DEFAULT (UUID()),

    nome_do_reclamante VARCHAR(360) NOT NULL,
    idade_do_reclamante INT,
    texto_extraido TEXT,

    id_classificador CHAR(36),
    bucket_name VARCHAR(255),
    object_key VARCHAR(512),

    PRIMARY KEY (id_texto),

    CONSTRAINT fk_texto_classificacao
        FOREIGN KEY (id_classificador)
        REFERENCES classificacoes(id_classificador),

    CONSTRAINT fk_texto_s3
        FOREIGN KEY (bucket_name, object_key)
        REFERENCES s3(bucket_name, object_key)
) ENGINE=InnoDB;




INSERT INTO classificacoes (id_classificador, nome_classificacao, palavra_chave)
VALUES
-- imobiliario
(UUID(), 'imobiliario', 'credito imobiliario'),
(UUID(), 'imobiliario', 'casa'),
(UUID(), 'imobiliario', 'apartamento'),

-- seguros
(UUID(), 'seguros', 'resgate'),
(UUID(), 'seguros', 'capitalizacao'),
(UUID(), 'seguros', 'socorro'),

-- cobranca
(UUID(), 'cobranca', 'fatura'),
(UUID(), 'cobranca', 'cobranca'),
(UUID(), 'cobranca', 'valor'),
(UUID(), 'cobranca', 'indevido'),

-- acesso
(UUID(), 'acesso', 'acessar'),
(UUID(), 'acesso', 'login'),
(UUID(), 'acesso', 'senha'),

-- aplicativos
(UUID(), 'aplicativos', 'app'),
(UUID(), 'aplicativos', 'aplicativo'),
(UUID(), 'aplicativos', 'travando'),
(UUID(), 'aplicativos', 'erro'),

-- fraude
(UUID(), 'fraude', 'fatura'),
(UUID(), 'fraude', 'nao reconhece divida'),
(UUID(), 'fraude', 'fraude');

select * from classificacoes;