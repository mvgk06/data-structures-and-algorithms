# [704. Binary Search](https://leetcode.com/problems/binary-search/)

## Solution 1 - Iterative

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums)-1
        while start <= end:
            mid = start+(end-start)//2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                end = mid-1
            else:
                start = mid+1
        return -1
```

- Time - `O(logn)`
- Space - `O(1)`
- Where `n` is the number of elements.

## Solution 2 - Recursive

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return self.helper(nums, target, 0, len(nums)-1)

    def helper(self, nums, target, start, end):
        if start > end:
            return -1
        mid = start+(end-start)//2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            return self.helper(nums, target, start, mid-1)
        return self.helper(nums, target, mid+1, end)
```

- Time - `O(logn)`
- Space - `O(logn)`
- Where `n` is the number of elements.