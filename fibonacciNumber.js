/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memoization = []) {
  if (memoization[n] !== undefined) return memoization[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;
  let result = fib(n - 1, memoization) + fib(n - 2, memoization);
  memoization[n] = result;
  return result;
};
