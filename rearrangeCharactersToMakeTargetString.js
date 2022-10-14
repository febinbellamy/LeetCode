var rearrangeCharacters = function (s, target) {
  const stringArr = s.split(""); // s --> ['a', 'b', 'c', 'b', a]

  const frequencyObject = {};

  for (let i = 0; i < stringArr.length; i++) {
    let currentChar = stringArr[i];

    if (target.includes(currentChar)) {
      if (frequencyObject[currentChar]) {
        frequencyObject[currentChar]++;
      } else {
        frequencyObject[currentChar] = 1;
      }
    }
  }

  let objectValues = Object.values(frequencyObject);
  let objectKeys = Object.keys(frequencyObject);

  let index = 0;
  let countWords = 0;

  while (index !== target.length) {
    // find the target[index] in the frequency object and reduce its value by 1.
    let foundKey = Object.keys(frequencyObject).find(
      (key) => key === target[index]
    );
    if (foundKey === undefined) return 0;

    if (frequencyObject[foundKey] === 0) {
      return countWords;
    }

    frequencyObject[foundKey]--;

    if (index === target.length - 1) {
      countWords++;
      if (Math.min(...objectValues) === 0) {
        break;
      }
      index = 0;
    } else {
      index++;
    }
    objectValues = Object.values(frequencyObject);
  }
  return countWords;
};
