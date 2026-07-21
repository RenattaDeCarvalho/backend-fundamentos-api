# Backend Fundamentos API

## Sobre o projeto

Este projeto foi desenvolvido para praticar os primeiros conceitos de desenvolvimento Backend utilizando Node.js, Express e TypeScript.

A aplicação simula uma API simples para gerenciamento de estudantes utilizando um banco de dados em memória.

---

## Tecnologias utilizadas

- Node.js
- Express
- TypeScript

---

## Como executar o projeto

1. Clone este repositório.

2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## Rotas disponíveis

### GET /health

Verifica se a API está funcionando.

---

### GET /students

Retorna todos os estudantes cadastrados.

---

### POST /students

Cadastra um novo estudante.

Exemplo de requisição:

```json
{
  "name": "Maria"
}
```

---

### GET /students/:id

Busca um estudante pelo seu ID.

Exemplo:

```
/students/1
```

---

### GET /students/search?name=

Busca estudantes pelo nome.

Exemplo:

```
/students/search?name=mar
```

---

## Documentação da API

Após iniciar a aplicação, acesse:

```
http://localhost:3000/docs
```

para visualizar a documentação criada com Swagger.

---

## Observação

Este projeto utiliza um banco de dados em memória. Isso significa que os dados são armazenados apenas enquanto a aplicação estiver em execução. Ao reiniciar o servidor, todas as informações cadastradas serão perdidas.

---

## O que foi praticado

- Criação de uma API com Express
- Organização em camadas
- Criação de rotas
- Controllers
- Banco de dados em memória
- Requisições GET e POST
- Uso de Route Params (`req.params`)
- Uso de Query Params (`req.query`)
- Introdução ao TypeScript
- Documentação da API com Swagger