# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## Solution 1 - Brute force

```py
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        for i in range(n):
            for j in range(i+1, n):
                if nums[i] == nums[j]:
                    return True
        return False
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 2 - Sort

```py
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        for i in range(len(nums)-1):
            if nums[i] == nums[i+1]:
                return True
        return False
```

-   Time - `O(nlogn)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Hash set

```py
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        s=set()
        for i in range(len(nums)):
            if nums[i] in s:
                return True
            s.add(nums[i])
        return False
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
