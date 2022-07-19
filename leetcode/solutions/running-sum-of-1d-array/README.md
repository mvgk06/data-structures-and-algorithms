# [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

## Solution 1 - Prefix Sum

```c++
class Solution
{
public:
    vector<int> runningSum(vector<int> &nums)
    {
        int n = nums.size();
        vector<int> res(n, 0);
        res[0] = nums[0];
        for (int i = 1; i < n; i++)
        {
            res[i] = res[i - 1] + nums[i];
        }
        return res;
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the size of the array.