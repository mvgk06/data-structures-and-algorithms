/*

Counting sort

Time - O(n)
Space - O(1)

*/

const sortColors1 = function (nums) {

  const arr = new Array(3).fill(0);

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]]++;
  }

  let curr = 0;
  for (let i = 0; i < 3; i++) {
    let n = arr[i];
    while (n != 0) {
      nums[curr] = i;
      curr++;
      n--;
    }
  }
};

/*

Three way partitioning algorithm

Time - O(n)
Space - O(1)

*/

const sortColors2 = function (nums) {

  let start = 0, mid = 0, end = nums.length - 1, temp;

  while (mid <= end) {
    if (nums[mid] === 0) {
      temp = nums[mid];
      nums[mid] = nums[start];
      nums[start] = temp;
      start++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      temp = nums[mid];
      nums[mid] = nums[end];
      nums[end] = temp;
      end--;
    }
  }
};
