import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import peopleReducers from "./reducers/people";
import notificationReducer from "./reducers/notification";

const reducer = combineReducers({
  ...peopleReducers,
  notification: notificationReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
