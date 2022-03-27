# [322. Coin Change](https://leetcode.com/problems/coin-change/)

## Solution 1 - Top down DP

```py
from math import inf, isinf


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        n = len(coins)
        memo = [[-1 for j in range(amount+1)] for i in range(n)]
        res = self.helper(coins, n-1, amount, memo)
        if not isinf(res):
            return res
        return -1

    def helper(self, coins, i, j, memo):
        if i < 0:
            if j == 0:
                return 0
            return inf
        if memo[i][j] != -1:
            return memo[i][j]
        if coins[i] <= j:
            pick = 1+self.helper(coins, i, j-coins[i], memo)
            dontPick = self.helper(coins, i-1, j, memo)
            memo[i][j] = min(pick, dontPick)
        else:
            dontPick = self.helper(coins, i-1, j, memo)
            memo[i][j] = dontPick
        return memo[i][j]
```

- The `memo[i][j]` represents the minimum coins required to get the amount `j` when we can pick coins till the `ith` index.
- At each index, we can either pick or don't pick the current coin.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` is the number of coins, `m` is the amount.

## Solution 2 - Bottom up DP

```py
from math import inf, isinf


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        n = len(coins)
        memo = [[0 for j in range(amount+1)] for i in range(n+1)]
        for j in range(1, amount+1):
            memo[0][j] = inf
        for i in range(1, n+1):
            for j in range(1, amount+1):
                if coins[i-1] <= j:
                    pick = 1+memo[i][j-coins[i-1]]
                    dontPick = memo[i-1][j]
                    memo[i][j] = min(pick, dontPick)
                else:
                    dontPick = memo[i-1][j]
                    memo[i][j] = dontPick
        res = memo[n][amount]
        if not isinf(res):
            return res
        return -1
```

- The `memo[i][j]` represents the minimum coins required to get the amount `j` when the size of the input is `i`.
- At each index, we can either pick or don't pick the current coin.
- Time - `O(n*m)`
- Space - `O(n*m)`
- Where `n` is the number of coins, `m` is the amount.

## Solution 3 - Bottom up DP (space optimized)

```py
from math import inf, isinf


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        n = len(coins)
        prev = [inf for j in range(amount+1)]
        prev[0] = 0
        for i in range(1, n+1):
            curr = [0 for j in range(amount+1)]
            curr[0] = 0
            for j in range(1, amount+1):
                if coins[i-1] <= j:
                    pick = 1+curr[j-coins[i-1]]
                    dontPick = prev[j]
                    curr[j] = min(pick, dontPick)
                else:
                    dontPick = prev[j]
                    curr[j] = dontPick
            prev = curr
        res = prev[amount]
        if not isinf(res):
            return res
        return -1
```

- Time - `O(n*m)`
- Space - `O(m)`
- Where `n` is the number of coins, `m` is the amount.