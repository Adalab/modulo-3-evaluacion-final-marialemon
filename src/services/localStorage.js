function get(key, defaultData) {
  const data = localStorage.getItem(key);
  //si lo que me devuelve es null, es que no tengo data
  //y si no tengo data, return una data por default que yo te diga
  //para que no haya ningún momento donde salga undefined
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default {
  get: get,
  set: set,
};
