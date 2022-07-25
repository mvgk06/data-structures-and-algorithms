# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

## Solution 1 - Two Pointers

```c++
class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int i = 0;
        for (int j = 0; j < nums.size(); j++)
        {
            if (nums[i] != 0)
            {
                i++;
            }
            else if (nums[j] != 0)
            {
                swap(nums[i], nums[j]);
                i++;
            }
        }
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the array.