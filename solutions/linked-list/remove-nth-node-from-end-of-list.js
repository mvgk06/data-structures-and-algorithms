/*

Two pointer

Time - O(n)
Space - O(1)

*/

const removeNthFromEnd = function(head, n) {

    let slow=head, fast=head, i=1;
    
    while(fast!=null && i<=n){
        fast=fast.next;
        i++;
    }
    
    let prev=null;
    
    while(fast!=null){
        prev=slow;
        slow=slow.next;
        fast=fast.next;
    }
    
    if(slow===head){
        return head.next;
    }
    
    prev.next=slow.next;
    
    return head;
    
};