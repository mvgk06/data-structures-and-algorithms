# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## Solution 1 - Stack

```py
class Solution:
    def isValid(self, s: str) -> bool:
        close = {
            '(': ')',
            '[': ']',
            '{': '}',
        }
        stack = []
        i = 0
        while i < len(s):
            ch = s[i]
            if ch == '(' or ch == '[' or ch == '{':
                stack.append(s[i])
            else:
                if len(stack) == 0:
                    return False
                top = stack[len(stack) - 1]
                if not close[top] == ch:
                    return False
                stack.pop()
            i += 1
        if len(stack) != 0:
            return False
        return True
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the size of the string.