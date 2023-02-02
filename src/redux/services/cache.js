class Cache {
  static getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static setData(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}

export default Cache;
