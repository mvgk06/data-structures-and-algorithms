/*

Brute force - Iterative

Time - O(n)
Space - O(1)

*/

const removeElements = function(head, val) {
    
    if(!head){
        return null;
    }
    
    if(head.next===null){
        if(head.val===val){
            return null;
        }
        return head;
    }
    
    let curr=head, prev;
    
    while(curr!=null){
        if(curr.val===val){
            if(curr===head){
                const next=curr.next;
                curr.next=null;
                curr=next;
                head=next;
            }
            else{
                prev.next=curr.next;
                curr=curr.next;
            }
        }
        else{
            prev=curr;
            curr=curr.next;
        }
    }
    
    return head;
    
};

/*

Brute force - Recursive

Time - O(n)
Space - O(n)

*/

const remove=(curr,val)=>{
    
    if(!curr){
        return null;
    }
    
    if(curr.val===val){
        return remove(curr.next,val);
    }
    
    curr.next=remove(curr.next,val);
    return curr;
}

const removeElements2 = function(head, val) {
   
    return remove(head,val);
    
};