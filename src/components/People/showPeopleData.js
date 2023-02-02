import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardContent, CardActions, Button, Grid } from "@mui/material";
import AirportShuttleIcon from "@mui/icons-material/Preview";
import LoadingButton from "@mui/lab/LoadingButton";

import { formatDate } from "../../utils/helper";
import { getVehiclesData } from "../../redux/reducers/people/vehiclesData";

import {
  PEOPLE_NAME,
  PEOPLE_EDITED,
  PEOPLE_GENDER,
  PEOPLE_HEIGHT,
  PEOPLE_MASS,
  SHOW_VEHICLE_DATA_TEXT,
  NO_VEHICLE_DATA_FOUND,
} from "../../utils/constants";

import { Item } from "./styles";

const ShowPeopleData = ({
  name,
  height,
  mass,
  gender,
  edited,
  url,
  vehicles,
}) => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.vehicles);

  const showVehiclesDetails = () => {
    dispatch(getVehiclesData({ vehicles, selectedPeopleId: `${url}` }));
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <Item className="custom-grid-item custom-border">
        <CardContent>
          <span>
            {PEOPLE_NAME} : {name}
          </span>
        </CardContent>
        <CardContent>
          <span>
            {PEOPLE_HEIGHT} : {height}
          </span>
        </CardContent>
        <CardContent>
          <span>
            {PEOPLE_MASS} : {mass}
          </span>
        </CardContent>
        <CardContent>
          <span>
            {PEOPLE_GENDER} : {gender}
          </span>
        </CardContent>
        <CardContent>
          <span>
            {PEOPLE_EDITED} : {formatDate(edited)}
          </span>
        </CardContent>
        <CardActions>
          {vehicles.length > 0 ? (
            <LoadingButton
              variant="contained"
              loading={isLoading && url === data.selectedPeopleId}
              className={"vehicle-button"}
              fullWidth
              onClick={() => showVehiclesDetails()}
            >
              {SHOW_VEHICLE_DATA_TEXT} &nbsp;
              <AirportShuttleIcon />
            </LoadingButton>
          ) : (
            <Button variant="contained" fullWidth disabled>
              {NO_VEHICLE_DATA_FOUND}
            </Button>
          )}
        </CardActions>
      </Item>
    </Grid>
  );
};

export default React.memo(ShowPeopleData);
