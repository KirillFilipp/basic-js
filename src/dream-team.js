module.exports = function createDreamTeam(members) {
  let resultArray = [];
  let result = '';
  let count = 0;
  function check(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] == ' ') {
        count = i;
      } else { return a[i]; }
    }
  };

  if (!Array.isArray(members)) {
    return false;
  } else {

    members.forEach(e => {
      if (!Array.isArray(e) && typeof e === 'string' && e.length > 1) {

        resultArray.push(check(e).toUpperCase());
      } else { }
    })
    return resultArray.sort().join('');
  }
};