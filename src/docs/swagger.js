const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Biblioteca Online",
        version: "1.0.0",
        description: "Documentação da API com exemplos de requisições e respostas"
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [
        {
            bearerAuth: [],
        }
    ],
    servers: [
        {
            url: "https://biblioteca-online-w014.onrender.com"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: [
        "./src/routes/*.js",
        "./src/docs/componentsAuth.js",
        "./src/docs/componentsUsuario.js",
        "./src/docs/componentsLivro.js",
        "./src/docs/componentsEmprestimo.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
