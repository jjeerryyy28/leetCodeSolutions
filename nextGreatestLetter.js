var nexGreatestLetter = function (letters, target) {
  let val = null;
  for (let i = 0; i < letters.length; i++) {
    if (target < letters[i]) {
      if (val === null || letters[i] < val) {
        val = letters[i];
      }
    }
  }
  if (val === null) {
    return letters[0];
  } else {
    return val;
  }
};
