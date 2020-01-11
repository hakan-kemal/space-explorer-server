const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
  }

  type Launch {
    id: ID!
    upcoming: Boolean
    date: Int
    site: String
    mission: Mission
    rocket: Rocket
  }

  type Mission {
    name: String
    details: String
    patch: String
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }
`;

module.exports = typeDefs;
