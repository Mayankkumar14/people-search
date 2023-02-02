import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { getPeopleData } from "../../redux/reducers/people/peopleData";

import PeopleSkeleton from "./peopleSkeleton";
import ShowPeopleData from "./showPeopleData";
import SearchPeople from "./searchPeople";
import ShowVehiclesDetails from "./Vehicle/showVehiclesDetails";

import NoDataFound from "./noDataFound";
import { SHOW_MORE_PEOPLE_DETAILS } from "../../utils/constants";

import "./styles/people.scss";

const People = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.people);

  const fetchPeopleData = useCallback(() => {
    dispatch(getPeopleData({ url: data.nextPageUrl }));
    // eslint-disable-next-line
  }, [data.nextPageUrl]);

  useEffect(() => {
    fetchPeopleData();
    // eslint-disable-next-line
  }, []);

  const showLoadMorePeopleButton = () => (
    <div className="show-more-button-container">
      <LoadingButton
        variant="contained"
        loading={isLoading}
        onClick={() => fetchPeopleData()}
        className={"show-more-button"}
      >
        {SHOW_MORE_PEOPLE_DETAILS}
      </LoadingButton>
    </div>
  );

  return (
    <div className="people-container">
      <SearchPeople isLoading={isLoading} />

      {isLoading && !data.totalPeopleCount && <PeopleSkeleton />}

      <Box className="box-custom">
        <Grid container className="grid-container" spacing={2}>
          {data.peopleData.length > 0 &&
            data.peopleData.map(
              (
                { name, height, mass, gender, edited, vehicles, url },
                index
              ) => (
                <ShowPeopleData
                  key={`${name}-${height}-${mass}-${index}`}
                  name={name}
                  url={url}
                  height={height}
                  mass={mass}
                  edited={edited}
                  gender={gender}
                  vehicles={vehicles}
                />
              )
            )}
        </Grid>
      </Box>

      {data.totalPeopleCount > 0 &&
        data.peopleData.length !== data.totalPeopleCount &&
        showLoadMorePeopleButton()}

      {!data.totalPeopleCount && !isLoading && <NoDataFound />}

      <ShowVehiclesDetails />
    </div>
  );
};

export default People;
