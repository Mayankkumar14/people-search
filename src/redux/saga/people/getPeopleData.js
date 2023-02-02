import { takeLatest, put } from "redux-saga/effects";
import {
  getPeopleData,
  getPeopleDataSuccess,
  getPeopleDataFailure,
} from "../../reducers/people/peopleData";
import { showErrorMessage } from "../../reducers/notification";
import People from "../../services/people";
import { Errors } from "../../../utils/messages";

function* getPeopleWatcher() {
  yield takeLatest(getPeopleData.type, getPeopleWorker);
}

function* getPeopleWorker(action) {
  try {
    const {
      url = "",
      searchText,
      isSearchFilterInput = false,
    } = action.payload;
    const response = yield People.getPeopleData({ url, searchText });
    const { results: peopleData, next, count } = response.data;

    yield put(
      getPeopleDataSuccess({
        peopleData,
        next,
        count,
        isSearchFilterInput,
      })
    );
  } catch (error) {
    yield put(getPeopleDataFailure({ msg: error.message }));
    yield put(showErrorMessage({ message: Errors.default }));
  }
}

export default getPeopleWatcher;
