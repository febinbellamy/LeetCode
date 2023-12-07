/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const seenCharsS = {};
  let finalStrS = "";
  let currentCharCodeS = 97;
  //  String.fromCharCode(97)=== "a"

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (!seenCharsS[currentChar]) {
      seenCharsS[currentChar] = String.fromCharCode(currentCharCodeS);
      finalStrS += String.fromCharCode(currentCharCodeS);
      currentCharCodeS++;
    } else {
      finalStrS += seenCharsS[currentChar];
    }
  }

  const seenObjT = {};
  let finalStrT = "";
  currentCharCodeT = 97;

  for (let j = 0; j < t.length; j++) {
    let currentChar = t[j];
    if (!seenObjT[currentChar]) {
      seenObjT[currentChar] = String.fromCharCode(currentCharCodeT);
      finalStrT += String.fromCharCode(currentCharCodeT);
      currentCharCodeT++;
    } else {
      finalStrT += seenObjT[currentChar];
    }
  }
  console.log(finalStrS);
  console.log(finalStrT);

  return finalStrT === finalStrS;
};
