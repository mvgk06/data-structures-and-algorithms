# [704. Binary Search](https://leetcode.com/problems/binary-search/)

## Solution 1 - Recursive

```c++
class Solution
{
public:
    int helper(vector<int> &nums, int target, int start, int end)
    {
        if (start > end)
        {
            return -1;
        }
        int mid = start + (end - start) / 2;
        if (nums[mid] == target)
        {
            return mid;
        }
        if (nums[mid] > target)
        {
            return helper(nums, target, start, mid - 1);
        }
        return helper(nums, target, mid + 1, end);
    }
    int search(vector<int> &nums, int target)
    {
        return helper(nums, target, 0, nums.size() - 1);
    }
};
```

- Time - `O(logn)`
- Space - `O(logn)`
- Where `n` is the size of the array.

## Solution 2 - Iterative

```c++
class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int start = 0, end = nums.size() - 1;
        while (start <= end)
        {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target)
            {
                return mid;
            }
            else if (nums[mid] > target)
            {
                end = mid - 1;
            }
            else
            {
                start = mid + 1;
            }
        }
        return -1;
    }
};
```

- Time - `O(logn)`
- Space - `O(1)`
- Where `n` is the size of the array.