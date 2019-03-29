function URLify(str, length) {
  let res = "";

  for (let i = 0; i < length; i++) {
    if (str[i] === " ") {
      res = res + "%20";
    } else {
      res = res + str[i];
    }
  }

  return res;
}

module.exports = URLify;
