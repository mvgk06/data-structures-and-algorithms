# [189. Rotate Array](https://leetcode.com/problems/rotate-array/)

## Solution 1 - Brute Force

```c++
class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        int n = nums.size();
        k %= n;
        vector<int> res;
        for (int i = n - k; i < n; i++)
        {
            res.push_back(nums[i]);
        }
        for (int i = 0; i < n - k; i++)
        {
            res.push_back(nums[i]);
        }
        for (int i = 0; i < n; i++)
        {
            nums[i] = res[i];
        }
    }
};
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the size of the array.

## Solution 2 - Reverse

```c++
class Solution
{
public:
    void reverse(vector<int> &nums, int i, int j)
    {
        while (i < j)
        {
            swap(nums[i], nums[j]);
            i++;
            j--;
        }
    }
    void rotate(vector<int> &nums, int k)
    {
        int n = nums.size(), start = 0, end = n - 1;
        k %= n;
        reverse(nums, 0, n - k - 1);
        reverse(nums, n - k, n - 1);
        reverse(nums, 0, n - 1);
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the array.