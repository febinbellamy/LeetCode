/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let temp = "";
  let magazineArr = magazine.split("");
  let ransomNoteArr = ransomNote.split("");

  for (let i = 0; i < ransomNoteArr.length; i++) {
    let targetLetter = ransomNoteArr[i];

    if (magazineArr.includes(targetLetter)) {
      let indexOfTargetLetter = magazineArr.indexOf(targetLetter);
      magazineArr[indexOfTargetLetter] = "";
      temp += targetLetter;
    } else {
      return false;
    }
  }
  return true;
};
