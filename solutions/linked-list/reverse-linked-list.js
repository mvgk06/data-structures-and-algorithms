/*

Two pointer - Iterative

Time - O(n)
Space - O(1)

*/

const reverseList = function(head) {
    
    let prev=null, curr=head;
    
    while(curr!=null){
        const next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    
    return prev;
    
};

/*

Two pointer - Recursive

Time - O(n)
Space - O(n)

*/

const reverse=(prev,curr)=>{
    
    if(curr===null){
        return prev;
    }
    
    const next=curr.next;
    curr.next=prev;
    return reverse(curr,next);
    
}

const reverseList2 = function(head) {
    return reverse(null,head);
};