var longestSubstring = function (s, k) {
  let n = s.length;

  if (n == 0 || n < k) return 0;
  if (k <= 1) return n;

  let lettersObj = {};
  for (let i = 0; i < s.length; i++) {
    lettersObj[s[i]] = lettersObj[s[i]] ? lettersObj[s[i]] + 1 : 1;
  }

  if (Object.values(lettersObj).every((val) => val >= k)) return s.length;

  let longestSubStringFound = 0;
  let currentStart = 0;

  for (let i = 0; i < s.length; i++) {
    if (lettersObj[s[i]] < k) {
      longestSubStringFound = Math.max(
        longestSubstring(s.substr(currentStart, i - currentStart), k),
        longestSubStringFound
      );

      currentStart = i + 1;
    }
  }

  longestSubStringFound = Math.max(
    longestSubstring(s.substr(currentStart), k),
    longestSubStringFound
  );

  return longestSubStringFound > 1 ? longestSubStringFound : 0;
};
