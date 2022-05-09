# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## Solution 1 - Top down DP

```py
from math import inf


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        memo = [-1 for i in range(n)]
        self.helper(nums, n - 1, memo)
        res = -inf
        for val in memo:
            res = max(res, val)
        return res

    def helper(self, nums, i, memo):
        if i < 0:
            return 0
        if memo[i] != -1:
            return memo[i]
        maxSoFar = self.helper(nums, i - 1, memo)
        memo[i] = max(maxSoFar + nums[i], nums[i])
        return memo[i]
```

-   The `memo[i]` represents the maximum subarray sum ending at `ith` index.
-   At each index, we can either join the existing subarray or start a new one.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```py
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        memo = [0 for i in range(n)]
        memo[0] = nums[0]
        res = memo[0]
        for i in range(1, n):
            memo[i] = max(memo[i-1]+nums[i], nums[i])
            res = max(res, memo[i])
        return res
```

-   The `memo[i]` represents the maximum subarray sum ending at `ith` index.
-   At each index, we can either join the existing subarray or start a new one.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        prev = nums[0]
        res = prev
        for i in range(1, n):
            curr = max(prev+nums[i], nums[i])
            res = max(res, curr)
            prev = curr
        return res
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
