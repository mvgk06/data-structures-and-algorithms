# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Solution 1 - Top down DP

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        memo = [-1 for i in range(n+1)]
        memo[0] = prices[0]
        return self.helper(n, prices, 1, prices[0], memo)

    def helper(self, n, prices, i, mini, memo):
        if i == n:
            return 0
        if memo[i] != -1:
            return memo[i]
        memo[i] = max(prices[i]-mini, self.helper(n, prices,
                      i+1, min(mini, prices[i]), memo))
        return memo[i]
```

- The `memo[i][j]` represents the maximum profit that we can make when we sell the stock on `ith` day.
- At each index, we can either sell or don't sell the current stock.
- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of stocks.

## Solution 2 - Bottom up DP

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        memo = [0 for i in range(n+1)]
        mini = prices[0]
        for i in range(1, n+1):
            memo[i] = max(memo[i-1], prices[i-1]-mini)
            mini = min(mini, prices[i-1])
        return memo[n]
```

- The `memo[i][j]` represents the maximum profit that we can make when we sell the stock on `ith` day.
- At each index, we can either sell or don't sell the current stock.
- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of stocks.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        prev = 0
        mini = prices[0]
        for i in range(1, n+1):
            curr = max(prev, prices[i-1]-mini)
            mini = min(mini, prices[i-1])
            prev = curr
        return prev
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of stocks.