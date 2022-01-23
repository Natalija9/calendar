export const truncate = (str, length) => {
  const ending = "...";

  if (length == null) {
    length = 100;
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
