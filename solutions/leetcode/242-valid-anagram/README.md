# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## Solution 1 - Sort

```py
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)
```

- Time - `O(nlog(n))`
- Space - `O(n)`
- Where `n` is the size of the string.

## Solution 2 - Hash map

```py
from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return Counter(s) == Counter(t)
```

- Time - `O(n)`
- Space - `O(n)`
- Where `n` is the size of the string.

## Solution 3 - Count

```py
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sCount = self.getInitCount()
        tCount = self.getInitCount()
        self.updateCount(s, sCount)
        self.updateCount(t, tCount)
        for i in range(26):
            if sCount[i] != tCount[i]:
                return False
        return True

    def getInitCount(self):
        return [0 for i in range(26)]

    def updateCount(self, s, count):
        for ch in s:
            count[ord(ch)-ord('a')] += 1
```

- Time - `O(n)`
- Space - `O(1)`
- Where `n` is the size of the string.
