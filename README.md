# API para Gerenciamento de Horários de Clínica

- José Augusto Santos Rodrigues
- jrodriguesaugusto@gmail.com

## Descrição

Neste desafio o ponto chave era a não utilização de banco de dados para realização das ações dos endpoints, os dados deveriam ser gravados em um arquivo com extensão JSON que faria o papel de banco de dados da aplicação. Dessa forma a lógica de CRUD para banco de dados teve que ser implementada. A API é responsável por cadastrar regras de marcação de horários em uma clínica, existem três categorias de regras e foram implementadas apenas algumas das verificações necessárias com objetivo na avaliação do desafio.

## Bibliotecas, linguagem e Frameworks Utilizados

- Node.js
- Express
- Typescript
- Jest
- Apidoc

## Build, Testes e Documentação

O caminho para o arquivo database.json deve ser atualizado para corresponder ao seu caminho local quando for feito um clone do projeto.

Para instalar as dependências do projeto utilize um dos compandos a baixo:

```bash
npm install
```
ou
```bash
yarn
```

Para iniciar o projeto em modo de desenvolvimento rode os scripts abaixo com npm ou yarn:

```bash
yarn watch-ts
```

```bash
yarn watch-node
```

Para rodar os testes execute o script:

```bash
yarn test
```

Para gerar a documentação atualizada da API é necessário ter o apidoc instalado globalmente e executar o comando:

```bash
yarn global apidoc
```
```bash
apidoc -f routes.ts -o public/apidoc
```
Com o projeto em execução, explore a documentação da api no path 'http://localhost:3000/apidoc'.

## Execução

Com o projeto em execução, utilize a Postman Collection (cubos-backend-challenge.postman_collection.json) para utilizar as funcionalidades da API.
