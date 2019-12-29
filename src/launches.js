const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v3/';
  }

  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      upcoming: launch.upcoming,
      date: launch.launch_date_unix,
      // cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        details: launch.details,
        patch: launch.links.mission_patch_small
        // missionPatchSmall: launch.links.mission_patch_small,
        // missionPatchLarge: launch.links.mission_patch
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type
      }
    };
  }

  async getAllLaunches() {
    const response = await this.get('launches');
    return Array.isArray(response) ? response.map((launch) => this.launchReducer(launch)) : [];
  }

  getLaunchesByIds({ launchIds }) {
    return Promise.all(launchIds.map((launchId) => this.getLaunchById({ launchId })));
  }

  async getLaunchById({ launchId }) {
    const response = await this.get('launches', { flight_number: launchId });
    return this.launchReducer(response[0]);
  }
}

module.exports = LaunchAPI;
