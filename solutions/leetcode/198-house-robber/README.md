# [198. House Robber](https://leetcode.com/problems/house-robber/)

## Solution 1 - Top down DP

```py
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        memo = [-1 for i in range(n)]
        return self.helper(nums, n-1, memo)

    def helper(self, nums, i, memo):
        if i < 0:
            return 0
        if memo[i] != -1:
            return memo[i]
        rob = nums[i]+self.helper(nums, i-2, memo)
        dontRob = self.helper(nums, i-1, memo)
        memo[i] = max(rob, dontRob)
        return memo[i]
```

-   The `memo[i]` represents the maximum money that can be robbed if we rob till the `ith` house.
-   At each index, we can either rob or don't rob the current house.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 2 - Bottom up DP

```py
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        memo = [0 for i in range(n)]
        memo[0] = nums[0]
        memo[1] = max(nums[0], nums[1])
        for i in range(2, n):
            memo[i] = max(nums[i] + memo[i-2], memo[i-1])
        return memo[n-1]
```

-   The `memo[i]` represents the maximum money that can be robbed if we rob till the `ith` house.
-   At each index, we can either rob or don't rob the current house.
-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the size of the array.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        prev2 = nums[0]
        prev = max(nums[0], nums[1])
        for i in range(2, n):
            curr = max(nums[i] + prev2, prev)
            prev2 = prev
            prev = curr
        return prev
```

-   Time - `O(n)`
-   Space - `O(1)`
-   Where `n` is the size of the array.
