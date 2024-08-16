/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const arrayOfWords = title.split(" ");

  const finalArr = arrayOfWords.map((word) =>
    word.length <= 2
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

  return finalArr.join(" ");
};
