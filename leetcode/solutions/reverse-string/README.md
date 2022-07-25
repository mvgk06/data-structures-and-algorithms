# [344. Reverse String](https://leetcode.com/problems/reverse-string/)

## Solution 1 - Two Pointers

```c++
class Solution
{
public:
    void reverseString(vector<char> &s)
    {
        int start = 0, end = s.size() - 1;
        while (start < end)
        {
            swap(s[start], s[end]);
            start++;
            end--;
        }
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the array.