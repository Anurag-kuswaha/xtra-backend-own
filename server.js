// index.js
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = 4000;

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;
// Create an Apollo server instance
(async function (){
    try{
    const server = new ApolloServer({ typeDefs, resolvers });

// Apply the Apollo GraphQL middleware and set the path to /graphql
await server.start();
server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
}) }
catch(e){
    console.log('error is ', e);

}
}) ()


