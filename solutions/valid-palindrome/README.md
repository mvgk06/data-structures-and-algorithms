# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Solution 1 - Two Pointers

```py
class Solution:
    def isPalindrome(self, s: str) -> bool:
        start, end = 0, len(s)-1
        while start < end:
            valid_start, valid_end = s[start].isalnum(), s[end].isalnum()
            if valid_start and valid_end:
                if s[start].lower() != s[end].lower():
                    return False
                else:
                    start += 1
                    end -= 1
            elif valid_start:
                end -= 1
            elif valid_end:
                start += 1
            else:
                start += 1
                end -= 1
        return True
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of `s`.