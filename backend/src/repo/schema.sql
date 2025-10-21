create database if not exists book_manager;
use book_manager;

create table if not exists users (
    id int auto_increment primary key,
    nome varchar(100) not null,
    senha varchar(100) not null
);

create table if not exists books (
    id int auto_increment primary key,
    capa_url text not null,
    titulo varchar(200) not null,
    autor varchar(100) not null
);

insert into users (nome, senha) values ('admin','admin123');