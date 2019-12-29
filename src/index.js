const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const LaunchAPI = require('./launches');

const dataSources = () => ({
  launchAPI: new LaunchAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
