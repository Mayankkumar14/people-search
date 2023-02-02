import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import { InputAdornment, CircularProgress } from "@mui/material";

import { customDebounce } from "../../utils/helper";
import { getPeopleData } from "../../redux/reducers/people/peopleData";

import { SEARCH_PEOPLE_BY_NAME_TEXT } from "../../utils/constants";

const SearchPeople = ({ isLoading }) => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = customDebounce((e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue && inputValue.trim()) {
      return dispatch(
        getPeopleData({
          searchText: inputValue,
          isSearchFilterInput: true,
        })
      );
    }

    if (searchInput && searchInput.trim()) {
      dispatch(getPeopleData({ isSearchFilterInput: true }));
    }
  }, 600);

  return (
    <div className={"search-people-container"}>
      <TextField
        autoComplete="off"
        className={"textfield-root"}
        defaultValue={searchInput}
        onChange={handleChange}
        InputProps={
          isLoading && searchInput
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <CircularProgress className="circular-loader" />
                  </InputAdornment>
                ),
              }
            : null
        }
        disabled={isLoading}
        label={SEARCH_PEOPLE_BY_NAME_TEXT}
        name="search"
        variant="standard"
      />
    </div>
  );
};

export default React.memo(SearchPeople);
