/*

Two pointer

Time - O(n)
Space - O(1)

*/

const oddEvenList = function(head) {

    if(head===null){
        return null;
    }
    
    if(head.next===null || head.next.next===null){
        return head;
    }
    
    let oddPointer=head, evenPointer=head.next, evenHead=evenPointer;
    
    while(oddPointer!=null && oddPointer.next!=null && evenPointer!=null && evenPointer.next!=null){
        oddPointer.next=oddPointer.next.next;
        evenPointer.next=evenPointer.next.next;
        oddPointer=oddPointer.next;
        evenPointer=evenPointer.next;
    }
    
    oddPointer.next=evenHead;
    
    return head;
    
};
