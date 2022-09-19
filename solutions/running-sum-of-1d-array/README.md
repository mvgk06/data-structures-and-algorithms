# [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

## Solution 1 - Prefix Sum

```py
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        running_sum = []
        curr_sum = 0
        for i in range(len(nums)):
            curr_sum += nums[i]
            running_sum.append(curr_sum)
        return running_sum
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the array.