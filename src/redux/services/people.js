import axios from "axios";
import Cache from "./cache";

import { isSearchPeopleEndPoint, getPeoplePageId } from "./helper";

const PEOPLE_CACHE_KEY = "PEOPLE";

class People {
  static async getPeopleData({ url, searchText }) {
    let END_POINT = `${process.env.REACT_APP_SWAPI_BASE_URL}/people`;

    if (url) {
      END_POINT = url;
    }

    if (searchText && !url) {
      END_POINT = `${END_POINT}?search=${searchText}`;
    }

    const cacheKey = !url
      ? PEOPLE_CACHE_KEY
      : `${PEOPLE_CACHE_KEY}-page-${getPeoplePageId(url)}`;
    if (!searchText) {
      const cachedPeopleData = Cache.getData(cacheKey);
      if (cachedPeopleData) return cachedPeopleData;
    }

    const response = await axios.get(END_POINT);

    // Storing the people data (page-wise) in cache if data is not belong to search
    if (!isSearchPeopleEndPoint(END_POINT)) {
      Cache.setData(cacheKey, response);
    }

    return response;
  }
}

export default People;
