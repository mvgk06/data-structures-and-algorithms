/*

Problem

Apporach
- Use two pointers start, end.
- If both the characters are alphanumeric and are equal, then move both the pointers.
- Else return false.
- If either of the character is not alphanumeric, then move the respective pointer.

Time - O(n)
Space - O(1)

n - size of the string

*/

const isAlphanumeric = (ch) => {
    const c = ch.toLowerCase().charCodeAt(0);
    return (c >= 48 && c <= 57 || c >= 97 && c <= 122);
};

const isPalindrome = function (s) {
    let start = 0, end = s.length - 1;
    while (start < end) {
        if (isAlphanumeric(s[start])) {
            if (isAlphanumeric(s[end])) {
                if (s[start].toLowerCase() === s[end].toLowerCase()) {
                    start++;
                    end--;
                }
                else {
                    return false;
                }
            }
            else {
                end--;
            }
        }
        else {
            start++;
        }
    }
    return true;
};