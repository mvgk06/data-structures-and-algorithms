# [1. Two Sum](https://leetcode.com/problems/two-sum/)

## Solution 1 - Brute force

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i+1, n):
                if nums[i]+nums[j] == target:
                    return [i, j]
```

-   Time - `O(n^2)`
-   Space - `O(1)`
-   Where `n` is the size of the array.

## Solution 2 - Two pointers

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        arr = []
        for i in range(n):
            arr.append([i, nums[i]])
        arr.sort(key=lambda x: x[1])
        i = 0
        j = n-1
        while i < j:
            total = arr[i][1]+arr[j][1]
            if total == target:
                return [arr[i][0], arr[j][0]]
            elif total < target:
                i += 1
            else:
                j -= 1
```

-   Time - `O(nlogn)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Hash map

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        hashMap = {}
        for i in range(n):
            diff = target-nums[i]
            if diff in hashMap:
                return [hashMap[diff], i]
            hashMap[nums[i]] = i
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.
