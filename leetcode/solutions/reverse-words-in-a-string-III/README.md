# [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

## Solution 1 - Two Pointers

```c++
class Solution
{
public:
    void helper(string &s, int start, int end)
    {
        while (start < end)
        {
            swap(s[start], s[end]);
            start++;
            end--;
        }
    }
    string reverseWords(string s)
    {
        int i = 0;
        for (int j = 0; j < s.length(); j++)
        {
            if (s[j] == ' ')
            {
                helper(s, i, j - 1);
                i = j + 1;
            }
        }
        helper(s, i, s.length() - 1);
        return s;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the string.