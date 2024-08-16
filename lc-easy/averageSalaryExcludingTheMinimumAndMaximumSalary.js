/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const minSalary = Math.min(...salary);
  const maxSalary = Math.max(...salary);

  const remainingSalaries = salary.filter(
    (salary) => salary !== minSalary && salary !== maxSalary
  );
  const total = remainingSalaries.reduce((a, c) => a + c);
  return total / remainingSalaries.length;
};
