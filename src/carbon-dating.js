const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string' || 
  Number.isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) < 1 || 
  parseFloat(sampleActivity) > 15) {
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / (parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD));
  }
};
