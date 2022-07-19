# [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

## Solution 1 - Prefix Sum

```c++
class Solution
{
public:
    int rangeSum(vector<int> &prefix, int l, int r)
    {
        if (l > r)
        {
            return 0;
        }
        if (l == 0)
        {
            return prefix[r];
        }
        return prefix[r] - prefix[l - 1];
    }
    int pivotIndex(vector<int> &nums)
    {
        int n = nums.size();
        vector<int> prefix(n, 0);
        prefix[0] = nums[0];
        for (int i = 1; i < n; i++)
        {
            prefix[i] = prefix[i - 1] + nums[i];
        }
        for (int i = 0; i < n; i++)
        {
            if (rangeSum(prefix, 0, i - 1) == rangeSum(prefix, i + 1, n - 1))
            {
                return i;
            }
        }
        return -1;
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the size of the array.

## Solution 2 - Prefix Sum (space optimized)

```c++
class Solution
{
public:
    int pivotIndex(vector<int> &nums)
    {
        int n = nums.size(), rSum = 0, lSum = 0;
        for (int i = 0; i < n; i++)
        {
            rSum += nums[i];
        }
        for (int i = 0; i < n; i++)
        {
            rSum -= nums[i];
            if (lSum == rSum)
            {
                return i;
            }
            lSum += nums[i];
        }
        return -1;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the array.