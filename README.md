# API para Gerenciamento de Horários de Clínica

- José Augusto Santos Rodrigues
- jrodriguesaugusto@gmail.com

## Bibliotecas, linguagem e Frameworks Uutilizados

- Node.js
- Express
- Typescript
- Jest
- Apidoc

## Build, Testes e Documentação

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

Para rodar os testes faça checkout na branch 'tests' e execute o script:

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