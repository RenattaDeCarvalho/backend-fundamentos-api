export const swaggerDocument = {
  openapi: "3.0.0",

  info: {
    title: "Backend Fundamentos API",
    version: "1.0.0",
    description:
      "API simples para praticar os fundamentos de Backend com Node.js, Express e TypeScript.",
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local",
    },
  ],

  tags: [
    {
      name: "Health",
      description: "Verificação do funcionamento da API",
    },
    {
      name: "Students",
      description: "Rotas relacionadas aos estudantes",
    },
  ],

  paths: {
    "/health": {
      get: {
        tags: ["Health"],
        summary: "Verifica se a API está funcionando",

        responses: {
          200: {
            description: "API funcionando corretamente",

            content: {
              "application/json": {
                example: {
                  status: "ok",
                },
              },
            },
          },
        },
      },
    },

    "/students": {
      get: {
        tags: ["Students"],
        summary: "Lista todos os estudantes",

        responses: {
          200: {
            description: "Lista de estudantes retornada com sucesso",

            content: {
              "application/json": {
                schema: {
                  type: "array",

                  items: {
                    $ref: "#/components/schemas/Student",
                  },
                },

                example: [
                  {
                    id: 1,
                    name: "Renata",
                  },
                ],
              },
            },
          },
        },
      },

      post: {
        tags: ["Students"],
        summary: "Cadastra um novo estudante",

        requestBody: {
          required: true,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateStudent",
              },

              example: {
                name: "Maria",
              },
            },
          },
        },

        responses: {
          201: {
            description: "Estudante cadastrado com sucesso",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Student",
                },

                example: {
                  id: 2,
                  name: "Maria",
                },
              },
            },
          },
        },
      },
    },

    "/students/search": {
      get: {
        tags: ["Students"],
        summary: "Busca estudantes pelo nome",

        parameters: [
          {
            name: "name",
            in: "query",
            required: true,
            description: "Nome ou parte do nome do estudante",

            schema: {
              type: "string",
            },

            example: "ren",
          },
        ],

        responses: {
          200: {
            description: "Estudantes encontrados com sucesso",

            content: {
              "application/json": {
                schema: {
                  type: "array",

                  items: {
                    $ref: "#/components/schemas/Student",
                  },
                },

                example: [
                  {
                    id: 1,
                    name: "Renata",
                  },
                ],
              },
            },
          },

          400: {
            description: "O parâmetro name não foi enviado",

            content: {
              "application/json": {
                example: {
                  message: "The 'name' query parameter is required.",
                },
              },
            },
          },

          404: {
            description: "Nenhum estudante foi encontrado",

            content: {
              "application/json": {
                example: {
                  message: "Student not found.",
                },
              },
            },
          },
        },
      },
    },

    "/students/{id}": {
      get: {
        tags: ["Students"],
        summary: "Busca um estudante pelo ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do estudante",

            schema: {
              type: "integer",
            },

            example: 1,
          },
        ],

        responses: {
          200: {
            description: "Estudante encontrado com sucesso",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Student",
                },

                example: {
                  id: 1,
                  name: "Renata",
                },
              },
            },
          },

          404: {
            description: "Estudante não encontrado",

            content: {
              "application/json": {
                example: {
                  message: "Student not found.",
                },
              },
            },
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Student: {
        type: "object",

        properties: {
          id: {
            type: "integer",
            description: "Identificador do estudante",
            example: 1,
          },

          name: {
            type: "string",
            description: "Nome do estudante",
            example: "Renata",
          },
        },

        required: ["id", "name"],
      },

      CreateStudent: {
        type: "object",

        properties: {
          name: {
            type: "string",
            description: "Nome do estudante",
            example: "Maria",
          },
        },

        required: ["name"],
      },
    },
  },
};