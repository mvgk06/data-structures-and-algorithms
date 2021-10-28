class DoublyLinkedListNode {
	constructor(value, prev = null, next = null) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

module.exports = DoublyLinkedListNode;
