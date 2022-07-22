# [383. Ransom Note](https://leetcode.com/problems/ransom-note/)

## Solution 1 - Hashing

```c++
class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        unordered_map<char, int> count;
        for (char ch : magazine)
        {
            if (count.find(ch) != count.end())
            {
                count[ch]++;
            }
            else
            {
                count[ch] = 1;
            }
        }
        for (char ch : ransomNote)
        {
            if (count.find(ch) != count.end())
            {
                count[ch]--;
                if (count[ch] == 0)
                {
                    count.erase(ch);
                }
            }
            else
            {
                return false;
            }
        }
        return true;
    }
};
```

- Time - `O(n+m)`
- Space - `O(m)`
- Where `n` and `m` are the size of the strings.

## Solution 2 - Hashing (space optimized)

```c++
class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        int count[26] = {0};
        for (char ch : magazine)
        {
            count[ch - 'a']++;
        }
        for (char ch : ransomNote)
        {
            if (count[ch - 'a'] == 0)
            {
                return false;
            }
            count[ch - 'a']--;
        }
        return true;
    }
};
```

- Time - `O(n+m)`
- Space - `O(1)`
- Where `n` and `m` are the size of the strings.