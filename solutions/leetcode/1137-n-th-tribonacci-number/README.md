# [1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

## Solution 1 - Top down DP

```py
class Solution:
    def tribonacci(self, n: int) -> int:
        memo = [-1 for i in range(n+1)]
        return self.helper(n, memo)

    def helper(self, n, memo):
        if n <= 1:
            return n
        if n == 2:
            return 1
        if memo[n] != -1:
            return memo[n]
        first = self.helper(n - 1, memo)
        second = self.helper(n - 2, memo)
        third = self.helper(n - 3, memo)
        memo[n] = first + second + third
        return memo[n]
```

- The `memo[i]` represents the `ith` tribonacci number.
- For each index, the value is the sum of the previous three tribonacci numbers.
- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of terms.

## Solution 2 - Bottom up DP

```py
class Solution:
    def tribonacci(self, n: int) -> int:
        if n <= 1:
            return n
        if n == 2:
            return 1
        memo = [0 for i in range(n+1)]
        memo[1] = memo[2] = 1
        for i in range(3, n+1):
            memo[i] = memo[i-1] + memo[i-2] + memo[i-3]
        return memo[n]
```

- The `memo[i]` represents the `ith` tribonacci number.
- For each index, the value is the sum of the previous three tribonacci numbers.
- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the number of terms.

## Solution 3 - Bottom up DP (space optimized)

```py
class Solution:
    def tribonacci(self, n: int) -> int:
        if n <= 1:
            return n
        if n == 2:
            return 1
        first = 0
        second = third = 1
        for i in range(3, n+1):
            curr = first+second+third
            first = second
            second = third
            third = curr
        return third
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the number of terms.