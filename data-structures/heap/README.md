# Heap

```py
class Heap:
    def __init__(self, hasTopPriority):
        self._arr = []
        self._size = 0
        self._hasTopPriority = hasTopPriority

    def _parent(self, i):
        return (i - 1) // 2

    def _left(self, i):
        return 2 * i + 1

    def _right(self, i):
        return 2 * i + 2

    def _swap(self, curr, parent):
        temp = self._arr[curr]
        self._arr[curr] = self._arr[parent]
        self._arr[parent] = temp

    def append(self, value):
        self._arr.append(value)
        self._size += 1
        curr = self._size - 1
        parent = self._parent(curr)
        while parent >= 0 and self._hasTopPriority(self._arr[curr], self._arr[parent]):
            self._swap(curr, parent)
            curr = parent
            parent = self._parent(curr)

    def pop(self):
        if self._size > 0:
            val = self._arr[0]
            if self._size == 1:
                self._arr.pop()
                self._size -= 1
            else:
                self._arr[0] = self._arr[self._size - 1]
                self._arr.pop()
                self._size -= 1
                self._heapify(0)
            return val

    def _heapify(self, index):
        while index < self._size:
            top = index
            isTopUpdated = False
            left = self._left(top)
            right = self._right(top)
            if left < self._size and self._hasTopPriority(self._arr[left], self._arr[top]):
                top = left
                isTopUpdated = True
            if right < self._size and self._hasTopPriority(self._arr[right], self._arr[top]):
                top = right
                isTopUpdated = True
            if isTopUpdated:
                self._swap(index, top)
                index = top
            else:
                break

    def build(self, arr):
        self._arr = list(arr)
        self._size = len(arr)
        lastParent = self._parent(self._size - 1)
        for i in range(lastParent, -1, -1):
            self._heapify(i)

    def top(self):
        if self._size > 0:
            return self._arr[0]

    def size(self):
        return self._size
```

-   Time
    -   Build - `O(n)`
    -   Insert - `O(logn)`
    -   Delete - `O(logn)`
    -   Top - `O(1)`
    -   Size - `O(1)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
