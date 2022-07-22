# [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)

## Solution 1 - Binary Search

```c++
class Solution
{
public:
    int firstBadVersion(int n)
    {
        int start = 1, end = n, res = -1;
        while (start <= end)
        {
            int mid = start + (end - start) / 2;
            if (isBadVersion(mid))
            {
                res = mid;
                end = mid - 1;
            }
            else
            {
                start = mid + 1;
            }
        }
        return res;
    }
};
```

- Time - `O(logn)`
- Space - `O(1)`
- Where `n` is the number of versions.