create table categorias (  -- estamos criando a tabela categorias
    id int auto_increment primary key,  -- definindo a coluna id como   chave primária e auto incremento
    nome varchar(100) not null,  -- definindo a coluna nome como não nula
    descricao varchar(255)  -- definindo a coluna descricao
);