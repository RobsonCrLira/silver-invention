## 📝 Menu

- [Projeto](#projeto)
- [Ferramentas Utilizadas](#ferramentas)
- [Usando Docker](#docker)
- [Arquivo de configuração](#configuracao)
- [Instalação](#instalacao)
- [Executar o projeto](#executar)
- [Acesso ao projeto](#acesso)

&nbsp;

## Projeto

Fazer uma requisição da API de search da VTEX e, utilizando conceitos de processamento em fila, enviar um email (via Mailtrap ou qualquer outra plataforma de envio de emails de sua preferência) com a quantidade de produtos disponíveis na loja

&nbsp;

## ⛏️ Ferramentas Utilizadas

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [NodeJs](https://nodejs.dev/)
- [Docker](https://www.docker.com/)

### Pré-requisitos

Para a execução do projeto é necessário possuir o [Node.JS](https://nodejs.org/en/download/) (na sua versão 14.x ou superior), junto com uma das duas opções [Redis](https://redis.io/download) ou [Docker](https://docs.docker.com/get-docker/).

&nbsp;

## 🐋 Usando Docker

Caso esteja utilize Docker para executar o projeto utilize os seguintes comandos:

```bash
docker-compose up # para subir o container e executar junto com a aplicação
docker-compose down # para parar o container após utilizar a aplicação
```

&nbsp;

## ⚙ Arquivo de configuração

Aqui você irá criar o arquivo `.env` igual o `.env.example`inserindo os dados conforme é mostrado abaixo:

```bash
PORT_API=  # porta que a API vai usar
MAIL_HOST= # host do servico de envio de email
MAIL_PORT= # porta do servico de envio de email
MAIL_USER= # user ou username do servico de envio de email
MAIL_PASS= # pass ou passoword do servico de envio de email

REDIS_HOST= # host que o redis utiliza // por padrão é utilizado 127.0.0.1
REDIS_PORT= # host que o redis utiliza // por padrão é utilizado 6397

PRODUCT_SEARCH_URL= # URL que o usará para fazer a pesquisa
```

&nbsp;

## 🚀 Instalação

Para instalar as dependências deve usar o seguinte comando:

```bash
yarn
# ou
npm install
```

&nbsp;

## 🤖 Executar o projeto

Para executar o projeto utilize o comando:

```
yarn dev
```

&nbsp;

## Acesso ao projeto

Após executar o projeto o mesmo poderá ser visualizado através da URL:

`http://localhost:{PORT}/`

<font color="RED">Para executar sem que ocorrá o `PORT` do arquivo `.env` deve estar setado!</font>
