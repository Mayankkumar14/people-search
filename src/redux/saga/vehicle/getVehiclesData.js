import { takeLatest, put } from "redux-saga/effects";
import {
  getVehiclesData,
  getVehiclesDataSuccess,
  getVehiclesDataFailure,
} from "../../reducers/people/vehiclesData";
import { showErrorMessage } from "../../reducers/notification";
import Vehicles from "../../services/vehicles";
import { Errors } from "../../../utils/messages";

function* getVehiclesDataWatcher() {
  yield takeLatest(getVehiclesData.type, getVehiclesDataWorker);
}

function* getVehiclesDataWorker(action) {
  try {
    const vehiclesData = yield Vehicles.getAllVehicles({
      vehicles: action.payload.vehicles,
    });
    yield put(getVehiclesDataSuccess({ vehiclesData }));
  } catch (error) {
    yield put(getVehiclesDataFailure({ msg: error.message }));
    yield put(showErrorMessage({ message: Errors.default }));
  }
}

export default getVehiclesDataWatcher;
