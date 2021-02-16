/* 

Set

Time - O(n)
Space - O(n)

*/

const hasCycle = function(head) {
 
    const set=new Set();
    
    let curr=head;
    
    while(curr!=null){
        if(set.has(curr)){
            return true;
        }
        else{
            set.add(curr);
        }
        curr=curr.next;
    }
    
    return false;
    
};

/*

Two pointer

Time - O(n)
Space - O(1)

*/

const hasCycle2 = function(head) {
 
    let slow=head, fast=head;
    
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            return true;
        }
    }
    
    return false;
    
};
