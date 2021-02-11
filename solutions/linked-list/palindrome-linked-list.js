/*

Two pointer 

Time - O(n)
Space - O(1)

*/

const isPalindrome = function(head) {
    
    if(!head || head.next===null){
        return true;
    }
    
    let slow=head, fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    
    let curr=slow, prev=null;
    
    while(curr!=null){
        const next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    
    curr=head;
    while(prev!=null && curr!=null){
        if(prev.val!=curr.val){
            return false;
        }
        prev=prev.next;
        curr=curr.next;
    }
    
    return true;
    
};