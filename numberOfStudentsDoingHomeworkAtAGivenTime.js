/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let queryTimeCounter = 0;

  for (let i = 0; i < startTime.length; i++) {
    let currentStudentsStartTime = startTime[i];
    let currentStudentsEndTime = endTime[i];

    if (
      currentStudentsStartTime <= queryTime &&
      queryTime <= currentStudentsEndTime
    ) {
      queryTimeCounter++;
    }
  }

  return queryTimeCounter;
};
