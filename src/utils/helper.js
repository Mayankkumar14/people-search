import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format("LLL");
};

export const customDebounce = (cb, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
};
