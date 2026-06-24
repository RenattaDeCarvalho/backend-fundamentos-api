# Backend Fundamentos API

Projeto desenvolvido para revisão dos fundamentos de Backend utilizando Node.js, Express e TypeScript.

## Objetivo

Este projeto tem como objetivo praticar conceitos fundamentais de desenvolvimento Backend, incluindo:

* Criação de APIs REST
* HTTP e métodos HTTP
* Rotas
* JSON
* Controllers
* Organização de projetos Node.js
* TypeScript
* Git e GitHub

Os dados são armazenados em memória, sem utilização de banco de dados.

---

## Tecnologias Utilizadas

* Node.js
* Express
* TypeScript
* ts-node-dev

---

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd backend-fundamentos-api
```

Instale as dependências:

```bash
npm install
```

---

## Execução

Iniciar aplicação em modo desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```txt
http://localhost:3000
```

---

## Estrutura do Projeto

```txt
src/
├── controllers/
│   └── StudentController.ts
│
├── data/
│   └── students.ts
│
├── routes/
│   ├── health.routes.ts
│   ├── welcome.routes.ts
│   └── student.routes.ts
│
└── server.ts
```

---

## Rotas

### Health Check

```http
GET /health
```

Resposta:

```json
{
  "status": "ok"
}
```

---

### Welcome

```http
GET /welcome
```

Resposta:

```json
{
  "message": "Bem-vinda ao Backend!"
}
```

---

### Listar alunos

```http
GET /students
```

Resposta:

```json
[
  {
    "id": 1,
    "name": "Renata"
  }
]
```

---

### Cadastrar aluno

```http
POST /students
```

Body:

```json
{
  "name": "Ana"
}
```

Resposta:

```json
{
  "id": 2,
  "name": "Ana"
}
```

---

## Observações

Os dados são armazenados apenas em memória através de um array.

Ao reiniciar a aplicação, todos os dados adicionados durante a execução serão perdidos.

Este comportamento é intencional, pois o objetivo deste projeto é praticar os fundamentos antes da introdução de bancos de dados.
