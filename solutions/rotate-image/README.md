# [48. Rotate Image](https://leetcode.com/problems/rotate-image/)

## Solution 1 - Transpose + Reverse

```py
class Solution:
    def transpose(self, matrix, n):
        for i in range(n):
            for j in range(n):
                if i < j:
                    matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        self.transpose(matrix, n)
        for i in range(n):
            matrix[i].reverse()
```

- Time - `O(n^2)`
- Space - `O(1)`
- Where `n` is the number of the rows and columns of `matrix`.