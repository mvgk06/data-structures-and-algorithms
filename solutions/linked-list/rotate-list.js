/*

Two pointer

Time - O(n)
Space - O(1)

*/

const rotateRight = function(head, k) {

    if(head===null || head.next===null){
        return head;
    }
    
    let curr=head, size=0, tail=null;
    
    while(curr!=null){
        if(curr.next===null){
            tail=curr;
        }
        curr=curr.next;
        size++;
    }
    
    if(k>size){
        k%=size;
    }
    
    if(k===0){
        return head;
    }
    
    
    let slow=head, fast=head, prev=null, count=0;
    
    while(fast!=null && count<k){
        fast=fast.next;
        count++;
    }
    
    while(fast!=null){
        prev=slow;
        slow=slow.next;
        fast=fast.next;
    }
    
    if(prev===null){
        return head;
    }
    
    let modifiedHead=prev.next;
    prev.next=null;
    tail.next=head;
    
    return modifiedHead;
    
};