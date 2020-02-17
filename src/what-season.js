module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (isNaN(Date.parse(date))) {
    throw new Error;
  } else {
    let b = Date.prototype.getMonth.call(date);
    if (b == 11 || b == 0 || b == 1) {
      return 'winter';
    } else if (b == 2 || b == 3 || b == 4) {
      return 'spring';
    } else if (b == 5 || b == 6 || b == 7) {
      return 'summer';
    } else if (b == 8 || b == 9 || b == 10) {
      return 'autumn';
    }
  }
};
