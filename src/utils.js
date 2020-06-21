/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function filterObject(obj, f) {
  let res = {};
  Object.keys(obj).forEach((k) => {
    const v = obj[k];
    if (f(v)) {
      res[k] = v;
    }
  });
  return res;
}

export function getRandomInt(min, maxExcl) {
  return Math.floor(Math.random() * (maxExcl - min) + min);
}

export function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return deliveryDate.toLocaleDateString("en-US", options);
}
