const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
  }

  type Launch {
    id: ID!
    upcoming: String
    date: Int
    site: String
    mission: Mission
    rocket: Rocket
    # isBooked: Boolean!
  }

  type Mission {
    name: String
    details: String
    patch: String
    # missionPatch(size: PatchSize): String
  }

  # enum PatchSize {
  #   SMALL
  #   LARGE
  # }

  type Rocket {
    id: ID!
    name: String
    type: String
  }
`;

module.exports = typeDefs;
