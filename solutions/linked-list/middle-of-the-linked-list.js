/* 

Brute force

Time - O(n)
Space - O(1)

*/

const middleNode = function(head) {
    
    let curr=head, count=0;
    
    while(curr!=null){
        count+=1;
        curr=curr.next;
    }
    
    let midIndex=Math.floor(count/2);
    
    curr=head, count=0;
    
    while(curr!=null && count<midIndex){
        count+=1;
        curr=curr.next;
    }
    
    return curr;
    
};

/* 

Two pointer

Time - O(n)
Space - O(1)

*/

const middleNode2 = function(head) {
    
    let slow=head, fast=head;
    
    while(fast!=null && fast.next!=null){
        slow=slow.next
        fast=fast.next.next;
    }

    return slow;
    
};