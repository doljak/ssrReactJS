# SSR com Razzle e ReactJs

## Primicias

[x] feito com ReactJS.

[x] UI Base React Bootstrap

[x] CSS compilado com Sass

[ ] Sistema Todo(CRUD)

[x] estrutura em SSR com Razzle

[x] Desenvolvimento em Typescript

[ ] SEO.

[ ] Salvar as tarefas no local storage

[ ] Testes unitários.

[ ] Testes com selenium.

## Descriçã0 da estrutura base

- Razzle (para estrutura SSR, usando Typescript e React)
- Jest (Testes unitários)
- Eslint (IDE, padrnização de código, uso de convenções)
- Prettier (IDE, falicita padronização e auxilia o ESlint)
- Editorconfig (Configurações para IDE)
- Sass
- Typescript
- SSR com Node(Express)

## Convenções

- CommonJS;
- SSR;
- TDD;
- Padronização do código com Eslint + Prettier configurados com a IDE (VS Code);

## Template base razzle usado nesta POC

<!-- START install generated instructions please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN yarn update-examples TO UPDATE -->Create and start the example:

```bash
npx create-razzle-app --example with-typescript with-typescript

cd with-typescript

```

<!-- END install generated instructions please keep comment here to allow auto update -->

## Instalações

Requisitos:

- Node v14.18
- git

Baixar o repositório

```bash
$ git clone https://github.com/doljak/ssrReactJS.git
```

Instalar dependencias e entra na pasta do projeto

```bash
$ sudo npm i
$ cd ssrReactJs

```

### local / desenvolvimento

```bash
$ sudo npm run start:dev

```

### Rodando Testes Unitários

```bash
$ sudo npm run start:test:razzle
```

### build / prod

```bash
$ sudo npm run start:build:prod

```

### rodar local ssr

Após o build do projeto:

```bash
$ sudo npm run start:prod:ssr

```
