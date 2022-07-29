# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

## Solution 1 - Binary Search

```py
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        n = len(nums)
        start, end = 0, n-1
        potential_target_index = n
        while start <= end:
            mid = (start+end)//2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                potential_target_index = mid
                end = mid-1
            else:
                start = mid+1
        return potential_target_index
```

- Time - `O(logn)`
- Space - `O(1)`
- Where `n` is the size of `nums`.