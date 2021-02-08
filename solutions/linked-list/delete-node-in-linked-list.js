/*

Brute force

Time - O(1)
Space - O(1)

*/

const deleteNode = function(node) {
    node.val=node.next.val;
    node.next=node.next.next;    
};