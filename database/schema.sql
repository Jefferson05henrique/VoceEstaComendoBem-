CREATE DATABASE IF NOT EXISTS voce_esta_comendo_bem;   -- criação do banco de dados caso não exista

USE voce_esta_comendo_bem;  -- seleciona o banco de dados para uso


-- =========================================
-- TABELA: categorias
-- =========================================

CREATE TABLE categorias (   -- criação da tabela categorias
    id INT AUTO_INCREMENT PRIMARY KEY,    -- coluna id do tipo inteiro, auto incremento e chave primária
    nome VARCHAR(100) NOT NULL,     -- coluna nome do tipo varchar com tamanho máximo de 100 caracteres e não nula
    descricao VARCHAR(255)     -- coluna descricao do tipo varchar com tamanho máximo de 255 caracteres
);


-- =========================================
-- TABELA: alimentos
-- =========================================

CREATE TABLE alimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    categoria_id INT NOT NULL,     -- coluna categoria_id do tipo inteiro e não nula, que será uma chave estrangeira referenciando a tabela categorias
    tipo_alimento VARCHAR(100),
    descricao VARCHAR(255),
    codigo_fonte VARCHAR(50),

    FOREIGN KEY (categoria_id)   -- chave estrangeira que referencia a coluna id da tabela categorias
        REFERENCES categorias(id)   -- refere-se à tabela categorias e à coluna id
);


-- =========================================
-- TABELA: nutrientes
-- =========================================

CREATE TABLE nutrientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    unidade VARCHAR(20) NOT NULL
);


-- =========================================
-- TABELA: composicao_nutricional
-- =========================================

CREATE TABLE composicao_nutricional (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alimento_id INT NOT NULL,
    nutriente_id INT NOT NULL,
    valor_por_100g DECIMAL(10,4) NOT NULL,   -- valor do nutriente por 100 gramas do alimento

    FOREIGN KEY (alimento_id)
        REFERENCES alimentos(id),

    FOREIGN KEY (nutriente_id)
        REFERENCES nutrientes(id),

    UNIQUE (alimento_id, nutriente_id)   -- garante que não haja duplicidade de nutrientes para o mesmo alimento
);


-- =========================================
-- TABELA: medidas
-- =========================================

CREATE TABLE medidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alimento_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    peso_em_gramas DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (alimento_id)
        REFERENCES alimentos(id)
);