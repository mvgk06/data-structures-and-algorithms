/*

Stack

Time - O(1)
Space - O(n)

*/

const listNode = function (value, next, min) {
    this.value = value;
    this.next = next;
    this.min = min;
};

const MinStack = function () {
    this.currTop = null;
};

MinStack.prototype.push = function (x) {

    const currNode = new listNode(x, null, x);

    if (this.currTop === null) {
        this.currTop = currNode;
    }
    else {
        currNode.next = this.currTop;
        currNode.min = Math.min(x, this.currTop.min);
        this.currTop = currNode;
    }
};

MinStack.prototype.pop = function () {
    if (this.currTop) {
        this.currTop = this.currTop.next;
    }
};

MinStack.prototype.top = function () {
    if (this.currTop) {
        return this.currTop.value;
    }
};

MinStack.prototype.getMin = function () {
    if (this.currTop) {
        return this.currTop.min;
    }
};