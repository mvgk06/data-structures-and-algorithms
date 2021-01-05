/* 

Stack

Time - O(n) 
Space - O(n)

*/

const getNearestLeft = (arr) => {

  const stack = [];
  const nearestLeft = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      nearestLeft.push(-1);
    } else {
      nearestLeft.push(stack[stack.length - 1]);
    }

    stack.push(i);
  }

  return nearestLeft;
};

const getNearestRight = (arr) => {

  const stack = [];
  const nearestRight = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      nearestRight.push(arr.length);
    } else {
      nearestRight.push(stack[stack.length - 1]);
    }

    stack.push(i);
  }

  return nearestRight.reverse();
};

const largestRectangleArea = function (arr) {

  if (arr.length === 0) {
    return 0;
  }

  const nearestLeft = getNearestLeft(arr), nearestRight = getNearestRight(arr);

  let maxArea = -Number.MAX_VALUE, currArea = 0;

  for (let i = 0; i < arr.length; i++) {
    currArea = arr[i] * (nearestRight[i] - nearestLeft[i] - 1);
    if (currArea > maxArea) {
      maxArea = currArea;
    }
  }

  return maxArea;
};
