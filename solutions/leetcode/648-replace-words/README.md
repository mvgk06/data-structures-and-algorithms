# [648. Replace Words](https://leetcode.com/problems/replace-words/)

## Solution 1 - Brute force

```py
class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        dictionary.sort(key=lambda x: len(x))
        words = sentence.split(' ')
        res = []
        for word in words:
            foundPrefix = False
            for prefix in dictionary:
                if self.hasPrefix(word, prefix):
                    foundPrefix = True
                    res.append(prefix)
                    break
            if not foundPrefix:
                res.append(word)
        return ' '.join(res)

    def hasPrefix(self, word, prefix):
        n = len(word)
        m = len(prefix)
        if m > n:
            return False
        for i in range(m):
            if prefix[i] != word[i]:
                return False
        return True
```

- Time - `O(m*n*k)`
- Space - `O(n+m)`
- Where `n` is the number of prefixes, `k` is the length of each prefix, `m` is the number of words.

## Solution 2 - Trie

```py
class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        trie = Trie()
        for prefix in dictionary:
            trie.insert(prefix)
        words = sentence.split(' ')
        res = []
        for word in words:
            res.append(self.replace(word, trie))
        return ' '.join(res)

    def replace(self, word, trie):
        curr = trie.root
        match = []
        for ch in word:
            if not curr.has(ch):
                break
            else:
                match.append(ch)
                curr = curr.get(ch)
            if curr.isEnd:
                break
        if curr.isEnd:
            return ''.join(match)
        return word
```

- Time - `O(n*k+m*l)`
- Space - `O(n*k+m)`
- Where `n` is the number of prefixes, `k` is the length of each prefix, `m` is the number of words, `l` is the length of each word.