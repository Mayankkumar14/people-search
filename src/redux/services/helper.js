export const getPeoplePageId = (url) => {
  const index = url.lastIndexOf("?page");
  return url.substring(index + 6, url.length);
};

export const isSearchPeopleEndPoint = (endPoint) => {
  return endPoint.includes("?search=");
};
