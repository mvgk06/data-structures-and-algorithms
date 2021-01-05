/* 

Brute force

Time - O(n*logn) + O(n^2)
Space - O(1)

*/

const canMerge = (currInterval, interval) => {
  return (
    (currInterval[0] >= interval[0] && currInterval[0] <= interval[1]) ||
    (interval[0] >= currInterval[0] && interval[0] <= currInterval[1])
  );
};

const merge1 = function (intervals) {

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const output = [];

  for (let i = 0; i < intervals.length; i++) {
    let currInterval = intervals[i];
    for (let j = i + 1; j < intervals.length; j++) {
      if (canMerge(currInterval, intervals[j])) {
        currInterval = [
          Math.min(currInterval[0], intervals[j][0]),
          Math.max(currInterval[1], intervals[j][1]),
        ];
      }
    }

    if (output.length === 0) {
      output.push(currInterval);
    }
    else {
      if (!canMerge(currInterval, output[output.length - 1])) {
        output.push(currInterval);
      }
    }
  }

  return output;
};

/*

Sorting

Time - O(n*logn)
Space - O(1)

*/

const merge2 = function (intervals) {

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const output = [];

  let currInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (canMerge(currInterval, intervals[i])) {
      currInterval = [
        Math.min(currInterval[0], intervals[i][0]),
        Math.max(currInterval[1], intervals[i][1]),
      ];
    }
    else {
      if (output.length === 0) {
        output.push(currInterval);
      }
      else {
        if (!canMerge(currInterval, output[output.length - 1])) {
          output.push(currInterval);
        }
      }

      currInterval = intervals[i];
    }
  }

  output.push(currInterval);

  return output;
};
