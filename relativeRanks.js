/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let copyOfArr = [...score];
  let sortedFromHTL = copyOfArr.sort((a, b) => b - a);
  let totalScores = score.map((num) => String(sortedFromHTL.indexOf(num) + 1));
  let gold = String(sortedFromHTL[0]);
  let silver = String(sortedFromHTL[1]);
  let bronze = String(sortedFromHTL[2]);

  totalScores[score.indexOf(+gold)] = "Gold Medal";
  totalScores[score.indexOf(+silver)] = "Silver Medal";
  totalScores[score.indexOf(+bronze)] = "Bronze Medal";

  return totalScores;
};
