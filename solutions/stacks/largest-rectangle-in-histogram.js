/* 

Stack

Time - O(n) 
Space - O(n)

*/

const getNearestSmallestOnLeft = (arr) => {

  const stack = [];
  const nearestSmallestOnLeft = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      nearestSmallestOnLeft.push(-1);
    } else {
      nearestSmallestOnLeft.push(stack[stack.length - 1]);
    }

    stack.push(i);
  }

  return nearestSmallestOnLeft;
};

const getNearestSmallestOnRight = (arr) => {

  const stack = [];
  const nearestSmallestOnRight = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      nearestSmallestOnRight.push(arr.length);
    } else {
      nearestSmallestOnRight.push(stack[stack.length - 1]);
    }

    stack.push(i);
  }

  return nearestSmallestOnRight.reverse();
};

const largestRectangleArea = function (arr) {

  if (arr.length === 0) {
    return 0;
  }

  const nearestSmallestOnLeft = getNearestSmallestOnLeft(arr), nearestSmallestOnRight = getNearestSmallestOnRight(arr);

  let maxArea = -Number.MAX_VALUE, currArea = 0;

  for (let i = 0; i < arr.length; i++) {
    currArea = arr[i] * (nearestSmallestOnRight[i] - nearestSmallestOnLeft[i] - 1);
    if (currArea > maxArea) {
      maxArea = currArea;
    }
  }

  return maxArea;
};