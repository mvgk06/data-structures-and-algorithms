# [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

## Solution 1 - Trie

```py
class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        curr = self.root
        for ch in word:
            if not curr.has(ch):
                curr.set(ch, Node())
            curr = curr.get(ch)
        curr.isEnd = True

    def search(self, word: str) -> bool:
        curr = self.root
        for ch in word:
            if not curr.has(ch):
                return False
            curr = curr.get(ch)
        return curr.isEnd

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for ch in prefix:
            if not curr.has(ch):
                return False
            curr = curr.get(ch)
        return True

class Node:
    def __init__(self):
        self._arr = [None for i in range(26)]
        self.isEnd = False

    def has(self, ch):
        return self.get(ch)

    def get(self, ch):
        return self._arr[self._index(ch)]

    def set(self, ch, val):
        self._arr[self._index(ch)] = val

    def _index(self, ch):
        return ord(ch)-ord('a')

    def isEmpty(self):
        for ref in self._arr:
            if ref:
                return False
        return True
```

- Time
  - Insert - `O(n)`
  - Search - `O(n)`
  - Starts with - `O(n)`
- Space - `O(n*m*k)`
- Where `n` is the size of the string, `m` is the number of strings and `k` is the size of the alphabet.