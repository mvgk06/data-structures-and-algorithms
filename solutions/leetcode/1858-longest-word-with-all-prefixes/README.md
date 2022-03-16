# [1858. Longest Word With All Prefixes](https://leetcode.com/problems/longest-word-with-all-prefixes/)

## Solution 1 - Brute force

```py
class Solution:
    def longestWord(self, words: List[str]) -> str:
        words.sort()
        words.sort(key=lambda x: len(x), reverse=True)
        hashSet = set(words)
        for word in words:
            if self.allPrefixExist(word, hashSet):
                return word
        return ''

    def allPrefixExist(self, word, hashSet):
        for i in range(len(word)):
            if word[:i+1] not in hashSet:
                return False
        return True
```

- Time - `O(n*k^2)`
- Space - `O(n)`
- Where `n` is the number of words and `k` is the length of each word.

## Solution 2 - Trie

```py
class Solution:
    def longestWord(self, words: List[str]) -> str:
        trie = Trie()
        for word in words:
            trie.insert(word)
        res = ''
        for word in words:
            if self.allPrefixExist(word, trie):
                k = len(word)
                m = len(res)
                if k > m or (k == m and word < res):
                    res = word
        return res

    def allPrefixExist(self, word, trie):
        curr = trie.root
        for ch in word:
            curr = curr.get(ch)
            if not curr or not curr.isEnd:
                return False
        return True
```

- Time - `O(n*k)`
- Space - `O(n*k)`
- Where `n` is the number of words and `k` is the length of each word.