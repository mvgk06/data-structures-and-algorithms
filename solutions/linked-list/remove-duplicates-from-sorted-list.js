/*

Brute force

Time - O(n)
Space - O(1)

*/

const deleteDuplicates = function(head) {
    
    if(!head){
        return null;
    }
    
    let prev=head, curr=head.next;
    
    while(curr!=null){
        if(curr.val===prev.val){
            prev.next=curr.next;
            curr=prev.next;
        }
        else{
            prev=curr;
            curr=curr.next;
        }
    }
    
    return head;
    
};