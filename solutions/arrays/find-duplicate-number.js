/* 

Set

Time - O(n) 
Space - O(n)

*/

const findDuplicate1 = function (nums) {

  const set=new Set();
    
    for(let i=0;i<nums.length;i++){
      if(set.has(nums[i])){
          return nums[i];
      }
      set.add(nums[i]);
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
