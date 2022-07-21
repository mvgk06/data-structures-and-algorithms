# [48. Rotate Image](https://leetcode.com/problems/rotate-image/)

## Solution 1 - Transpose + Reverse

```c++
class Solution
{
public:
    void transpose(vector<vector<int>> &matrix)
    {
        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < matrix.size(); j++)
            {
                if (i < j)
                {
                    swap(matrix[i][j], matrix[j][i]);
                }
            }
        }
    }
    void rotate(vector<vector<int>> &matrix)
    {
        transpose(matrix);
        for (int i = 0; i < matrix.size(); i++)
        {
            reverse(matrix[i].begin(), matrix[i].end());
        }
    }
};
```

- Time - `O(n^2)`
- Space - `O(1)`
- Where `n` is the number of the rows and columns.