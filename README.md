# Cripto Teste

## Checklist Requisitos

[] Criar a página seguindo o Layout. (Fazendo)

[x] o código deverá ser escrito com ReactJS. (Estrutura feita)

[x] caso queira usar um framework, pode usar o que preferir. (Estruturado para
usar Reactbootstrap)

[x] deverá usar um framework de css de sua preferência. (Estruturado para usar
SASS)

[x] o app todo deverá estar na rota /todo. (Estrutura feita)

[] o app deverá ser possivel adicionar, remover tarefas.(Fazendo)

[x] o arquivo README.md deve conter as instruções para rodar o projeto em
ambiente de desenvolvimento.(Feito)

[x] a home deverá carregar mesmo com o javscript desabilitado pelo navegador do
cliente.(Estrututa SSR feita)

### Extras

[x] Desenvolver em Typescript.(ok)

[x] SEO ainda que genérico.(ok) [] opção para edição de tarefas.(para fazer) []
salvar as tarefas no local storage.(para fazer) [x] testes unitários.(ok) []
testes com selenium.(não feito) [x] numeclatura dos commits organizados e
padronizados.(ok)

## Descriçã0 da estrutura base

- Razzle (para estrutura SSR, usando Typescript e React)
- Jest (Testes unitários)
- Eslint (IDE, padrnização de código, uso de convenções)
- Prettier (IDE, falicita padronização e auxilia o ESlint)
- Editorconfig (Configurações para IDE)
- Sass
- Typescript

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
$ git clone "repositório"
```

Instalar dependencias e entra na pasta do projeto

```bash
$ sudo npm i
$ cd ssrReactJs

```

### local / desenvolvimento

```bash
$ sudo npm npm:start:dev

```

### Rodando Testes Unitários

```bash
$ sudo npm npm:start:test
```

### build / prod

```bash
$ sudo npm npm:build:prod

```

### rodar local ssr

Após o build do projeto:

```bash
$ sudo npm npm:prod:ssr

```
