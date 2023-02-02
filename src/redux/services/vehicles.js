import axios from "axios";
import Cache from "./cache";

const VEHICLE_CACHE_KEY = "VEHICLE";

const getVehiclesPromises = ({ vehicleUrl }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const vehicleCacheKey = `${VEHICLE_CACHE_KEY}-${vehicleUrl}`;
      const vehicleData = Cache.getData(vehicleCacheKey);
      if (vehicleData) {
        return resolve(vehicleData);
      }

      // Storing the vehicle data in cache
      const response = await axios.get(vehicleUrl);
      Cache.setData(vehicleCacheKey, response.data);
      resolve(response.data);
    } catch (error) {
      reject();
    }
  });
};

export default class Vehicles {
  static async getAllVehicles({ vehicles }) {
    if (!(vehicles && vehicles.length)) {
      return;
    }

    const vehiclesPromises = [];
    vehicles.forEach((data) => {
      vehiclesPromises.push(() => getVehiclesPromises({ vehicleUrl: data }));
    });

    return Promise.all(vehiclesPromises.map((vehicles) => vehicles()));
  }
}
