# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Solution 1 - Two Pointers

```c++
class Solution
{
public:
    bool isAlphaNumeric(char ch)
    {
        return (ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    }
    bool isPalindrome(string s)
    {
        int start = 0, end = s.length() - 1;
        while (start < end)
        {
            char a = s[start], b = s[end];
            if (isAlphaNumeric(a) && isAlphaNumeric(b))
            {
                if (tolower(a) == tolower(b))
                {
                    start++;
                    end--;
                }
                else
                {
                    return false;
                }
            }
            else if (isAlphaNumeric(a))
            {
                end--;
            }
            else if (isAlphaNumeric(b))
            {
                start++;
            }
            else
            {
                start++;
                end--;
            }
        }
        return true;
    }
};
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the string.