const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Definimos el esquema de GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Definimos los resolvers para las consultas
const resolvers = {
  Query: {
    hello: () => '¡Hola Mundo desde GraphQL!'
  }
};

// Inicializamos el servidor Apollo con Express
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

// Aplicamos Apollo Server como middleware en Express
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  
  app.listen(4000, () =>
    console.log('Servidor GraphQL corriendo en http://localhost:4000/graphql')
  );
}

startServer();
