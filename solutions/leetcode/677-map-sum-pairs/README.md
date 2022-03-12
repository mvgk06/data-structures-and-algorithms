# [677. Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)

## Solution 1 - Hash map

```py
class MapSum:
    def __init__(self):
        self.hashMap={}

    def insert(self, key: str, val: int) -> None:
        self.hashMap[key]=val

    def sum(self, prefix: str) -> int:
        res=0
        for key,val in self.hashMap.items():
            if key.startswith(prefix):
                res+=val
        return res
```

- Time 
  - Insert - `O(1)`
  - Sum - `O(n*m)`
- Space - `O(n*m)`
- Where `n` is the size of the string and `m` is the number of strings.

## Solution 2 - Hash map + Trie

```py
class MapSum:
    def __init__(self):
        self.hashMap={}
        self.root = Node()

    def insert(self, key: str, val: int) -> None:
        override=False
        oldVal=0
        if key in self.hashMap:
            override=True
            oldVal=self.hashMap[key]
        self.hashMap[key]=val
        curr = self.root
        for ch in key:
            if not curr.has(ch):
                curr.set(ch, Node())
            curr = curr.get(ch)
            if override:
                curr.count-=oldVal
            curr.count += val
        curr.isEnd = True

    def sum(self, prefix: str) -> int:
        curr = self.root
        for ch in prefix:
            if not curr.has(ch):
                return 0
            curr = curr.get(ch)
        return curr.count


class Node:
    def __init__(self):
        self._arr = [None for i in range(26)]
        self.isEnd = False
        self.count = 0

    def has(self, ch):
        return self.get(ch)

    def get(self, ch):
        return self._arr[self._index(ch)]

    def set(self, ch, val):
        self._arr[self._index(ch)] = val

    def _index(self, ch):
        return ord(ch)-ord('a')
```

- Time
  - Insert - `O(n)`
  - Sum - `O(n)`
- Space - `O(n*m*k)`
- Where `n` is the size of the string, `m` is the number of strings and `k` is the size of the alphabet.