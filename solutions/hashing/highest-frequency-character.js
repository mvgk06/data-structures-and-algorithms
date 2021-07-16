/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/hashmap-and-heap/hfc-official/ojquestion

Approach
- Store the occurence of each character in a map.
- Traverse the map and get the character that occurs the most.
- Return the result.

Time - O(n)
Space - O(n)

n - size of the string

*/

const solve = (s) => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        }
        else {
            map.set(s[i], 1);
        }
    }
    let maxCount = 0, result = "";
    for (let key of map.keys()) {
        const currCount = map.get(key);
        if (currCount > maxCount) {
            maxCount = currCount;
            result = key;
        }
    }
    console.log(result);
};