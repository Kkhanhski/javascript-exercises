const convertToCelsius = function(f) {
  var c = 0;
  c = (f - 32) * (5/9);
  return Number(c.toFixed(1));
};

const convertToFahrenheit = function(c) {
  var f = 0;
  f = c * (9/5) + 32;
  return Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
