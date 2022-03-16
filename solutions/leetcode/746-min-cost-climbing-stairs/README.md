# [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

## Solution 1 - Top down DP

```py
from math import inf


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        memo = [-1 for i in range(n)]
        self.helper(cost, n, 0, memo)
        return min(memo[0], memo[1])

    def helper(self, cost, n, i, memo):
        if i > n:
            return inf
        if i == n:
            return 0
        if memo[i] != -1:
            return memo[i]
        first = self.helper(cost, n, i+1, memo)
        second = self.helper(cost, n, i+2, memo)
        memo[i] = cost[i]+min(first, second)
        return memo[i]
```

- The `memo[i]` represents the minimum cost to reach the `nth` stair from stair `i`.
- At each stair, we can either go to 1st or the 2nd stair.
- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of stairs.

## Solution 2 - Bottom up DP

```py
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        memo = [0 for i in range(n+1)]
        memo[n] = 0
        memo[n-1] = cost[n-1]
        for i in range(n-2, -1, -1):
            memo[i] = cost[i]+min(memo[i+1], memo[i+2])
        return min(memo[0], memo[1])
```

- The `memo[i]` represents the minimum cost to reach the `nth` stair from stair `i`.
- At each stair, we can either go to 1st or the 2nd stair.
- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of stairs.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        first = cost[n-1]
        second = 0
        for i in range(n-2, -1, -1):
            curr = cost[i]+min(first, second)
            second = first
            first = curr
        return min(first, second)
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of stairs.
  