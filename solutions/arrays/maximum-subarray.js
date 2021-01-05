/* 

Brute force

Time - O(n^2)
Space - O(1)

*/

const maxSubArray1 = function (arr) {

  let sum = 0, max = -Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(sum, max);
    }
  }

  max = Math.max(sum, max);

  return max;
};

/* 

Kadanes algorithm

Time - O(n)
Space - O(1)

*/

const maxSubArray2 = function (arr) {

  let sum = 0, max = -Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};
