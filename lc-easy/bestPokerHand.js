/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  // flush
  const filteredSuits = suits.filter((suit) => suit === suits[0]);

  if (filteredSuits.length === suits.length) {
    return "Flush";
  }

  const frequencyCounter = {};

  for (let i = 0; i < ranks.length; i++) {
    let currentRank = ranks[i];
    if (frequencyCounter[currentRank]) {
      frequencyCounter[currentRank]++;
    } else {
      frequencyCounter[currentRank] = 1;
    }
  }

  const objectValues = Object.values(frequencyCounter);
  const maxValue = Math.max(...objectValues);

  // three of a Kind
  if (maxValue >= 3) {
    return "Three of a Kind";

    // pair
  } else if (maxValue === 2) {
    return "Pair";

    // high card
  } else {
    return "High Card";
  }
};
