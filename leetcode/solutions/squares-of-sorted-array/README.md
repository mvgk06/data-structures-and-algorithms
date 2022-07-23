# [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

## Solution 1 - Sort

```c++
class Solution
{
public:
    vector<int> sortedSquares(vector<int> &nums)
    {
        vector<int> res;
        for (int num : nums)
        {
            res.push_back(num * num);
        }
        sort(res.begin(), res.end());
        return res;
    }
};
```

- Time - `O(nlogn)`
- Space - `O(n)`
- Where `n` is the size of the array.

## Solution 2 - Two Pointers

```c++
class Solution
{
public:
    vector<int> sortedSquares(vector<int> &nums)
    {
        int n = nums.size(), start = 0, end = n - 1, i = n - 1;
        vector<int> res(n);
        while (start <= end)
        {
            int startSq = nums[start] * nums[start], endSq = nums[end] * nums[end];
            if (startSq >= endSq)
            {
                res[i] = startSq;
                start++;
            }
            else
            {
                res[i] = endSq;
                end--;
            }
            i--;
        }
        return res;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the array.