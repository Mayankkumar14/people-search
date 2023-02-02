import peopleDataReducer from "./peopleData";
import vehiclesDataReducer from "./vehiclesData";

const peopleReducers = {
  people: peopleDataReducer,
  vehicles: vehiclesDataReducer,
};

export default peopleReducers;
