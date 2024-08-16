/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // s is a string of one student's attendance -- i.e. PPALLP

  let indexOfA = s.indexOf("A");
  let lastIndexOfA = s.lastIndexOf("A");

  // if there are 1 or 0 As...
  if (indexOfA === lastIndexOfA || s.indexOf("A") === -1) {
    // AND if there are NOT 3 consecutive Ls
    if (!s.includes("LLL")) {
      return true;
    }
  }
  // else return
  return false;
};
