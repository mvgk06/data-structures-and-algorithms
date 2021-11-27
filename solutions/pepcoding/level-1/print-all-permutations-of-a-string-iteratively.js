/*

Problem

https://pepcoding.com/resources/online-java-foundation/string,-string-builder-and-arraylist/print-all-permutations-of-a-string-iteratively-official/ojquestion

Approach
- Create a queue and enque the first character in the string.
- For each character in the string, traverse all the permutations of smaller size and insert the character at all the different positions. 
- Enque the current permutation into the queue.
- Print the final permutations.

Time - O(n!*n)
Space - O(n!)

n - size of the string

*/

const Queue = require('../../../data-structures/queue');

const solve = (s) => {
	const queue = new Queue();
	queue.enque(s[0]);
	for (let i = 1; i < s.length; i++) {
		const size = queue.getSize();
		for (let j = 1; j <= size; j++) {
			const front = queue.getFront();
			queue.deque();
			for (let k = front.length; k >= 0; k--) {
				queue.enque(front.substring(0, k) + s[i] + front.substring(k));
			}
		}
	}
	while (queue.getSize() > 0) {
		const front = queue.getFront();
		queue.deque();
		console.log(front);
	}
};
