# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

## Solution 1 - Binary Search

```c++
class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int start = 0, end = nums.size() - 1, res = nums.size();
        while (start <= end)
        {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target)
            {
                return mid;
            }
            else if (nums[mid] > target)
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
- Where `n` is the size of the array.