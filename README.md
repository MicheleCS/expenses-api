<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# install localstack container
$ docker-compose up -d
```
- Back to the root dir of service, then run the docker container which will serve the app.

```bash
# install and run docker development environment
$ make

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## AUTOR

NESTJS


O Nest é uma estrutura para a criação de API, eficientes e escalaveis. Utilizando o JavaScript e construido com o suporte TypeScript.

COMANDOS UTILIZADOS

$ npm i -g @nestjs/cli
$ nest new project-name

COMANDOS PARA RODAR O APP

$ npm run start
$ npm run start:dev

*Implementação do banco e dados PostgreSQL
Postgres é um sistema de gerenciamento de banco de dados objeto-relacional. Sua função principal é armazenar dados de forma segura, para depois recupera-las conforme for solicitado por outros aplicativos de softaware. 

.ENV

Para fazer a conexão com a imagem do banco de dados no docker e que o email seja encaminhando ao cadastrar uma despesa o .ENV deve ser configurado conforme o .env-exemple

COMANDOS UTILIZADOS

$ npm install --save typeorm pg

*Iniciando uma instância do Postgres no Docker 
Docker é um conjunto de produtos de plataforma que usa virtualização de sistema operacional para entregar pacotes chamados conteineres.

COMANDO UTIIZADO (Makefile)
	docker-compose -f docker-compose.yml up -d

*Autenticação
O recurso de autenticação é pensando como uma miniestrutura em si. Abstraindo o processo em algumas etapas que sera personalizado com base no que for implementado na aplicação.

COMANDOS UTILIZADOS:
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local

----------------------

GUIA EXPENSES-ONFLY

- Criar um Role > ADMIN ou BASIC

- Fazer o cadastro no User

- Mapear a role_id e user_id na entidade de ligação UserRole 

Logar na aplicação 
Recebendo um Token_acess para consumir as demais rotas

Demais rotas utilizadas 

Expenses
-- Quando for cadastrar um expense, deve acessar a rota Create passando o userId e categoryId

-- Somente usuário ADMIN tem acesso as rotas privadas como Category

