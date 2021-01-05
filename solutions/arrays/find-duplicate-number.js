/* 

Map

Time - O(n) 
Space - O(n)

*/

const findDuplicate1 = function (nums) {

  const map = new Map();

  for (let item of nums) {
    if (map.has(item)) {
      return item;
    } else {
      map.set(item, 1);
    }
  }
};

/* 

Floyds cycle detection algorithm

Time - O(n) 
Space - O(1)

*/

const findDuplicate2 = function (nums) {

  let slow = nums[0], fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  fast = nums[0];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
};
