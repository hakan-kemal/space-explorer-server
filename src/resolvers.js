const resolvers = {
  Query: {
    launches: (_, __, { dataSources }) => dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id })
  }
};

module.exports = resolvers;
