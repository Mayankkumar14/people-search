import React from "react";
import { Card, CardContent, Box, Grid, Modal, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearVehiclesData } from "../../../redux/reducers/people/vehiclesData";

import {
  VEHICLE_CLASS_LABEL,
  VEHICLE_DETAILS_LABEL,
  VEHICLE_MANUFACTURER_LABEL,
  VEHICLE_MODEL_LABEL,
  VEHICLE_NAME_LABEL,
} from "../../../utils/constants";

const ShowVehiclesDetails = () => {
  const { isLoading, data } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearVehiclesData());
  };

  return (
    <div className={"vehicles-detail-modal-container"}>
      <Modal
        open={!!data.vehiclesData.length && !isLoading}
        onClose={handleClose}
        className={"show-vehicles-modal"}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={"custom-box "} sx={{ pt: 2, px: 4, pb: 3 }}>
          <h2 id="parent-modal-title">{VEHICLE_DETAILS_LABEL}</h2>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {data.vehiclesData.map(
              ({ name, model, url, manufacturer, vehicle_class }) => (
                <Grid item xs={12} sm={12} md={12} key={url}>
                  <Card className="custom-border padding-10">
                    <h2>
                      {VEHICLE_NAME_LABEL}: {name}
                    </h2>
                    <CardContent>
                      {VEHICLE_MODEL_LABEL}: {model}
                    </CardContent>
                    <CardContent>
                      {VEHICLE_MANUFACTURER_LABEL}: {manufacturer}
                    </CardContent>
                    <CardContent>
                      {VEHICLE_CLASS_LABEL}: {vehicle_class}
                    </CardContent>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
          <br />

          <Button
            className={"close-button"}
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ShowVehiclesDetails;
