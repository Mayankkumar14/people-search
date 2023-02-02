import { all } from "redux-saga/effects";
import peopleWatcherFunctions from "./people";
import vehiclesWatcherFunctions from "./vehicle";

export default function* rootSaga() {
  yield all([
    ...peopleWatcherFunctions.map((watcherFn) => watcherFn()),
    ...vehiclesWatcherFunctions.map((watcherFn) => watcherFn()),
  ]);
}
