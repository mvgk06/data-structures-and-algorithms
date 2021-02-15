/*

Two pointer

Time - O(n)
Space - O(1)

*/

const detectCycle = function(head) {

    if(!head){
        return null;
    }
    
    let slow=head, fast=head, hasCycle=false;
    
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            hasCycle=true;
            break;
        }
    }
    
    if(hasCycle){
        slow=head;
    }
    else{
        return null;
    }
    
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next;
    }
    
    return slow;
    
};