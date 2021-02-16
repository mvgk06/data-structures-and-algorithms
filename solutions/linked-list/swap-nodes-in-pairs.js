/*

Two pointer - Iterative

Time - O(n)
Space - O(1)

*/

const swapPairs = function(head) {

    if(head===null){
        return null;
    }
    
    let curr=head, prev=null, next, isFirstSwap=true, currFirstNode=head, firstNodeInPrevIteration;
    
    while(curr!=null){
        for(let i=1;i<=2 && curr!=null;i++){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        if(isFirstSwap){
            head=prev;
            isFirstSwap=false;
        }
        else{
            firstNodeInPrevIteration.next=prev;
        }
        firstNodeInPrevIteration=currFirstNode;
        currFirstNode=curr;
        prev=null;
    }
    
    return head;
    
};

/*

Two pointer - Recursive

Time - O(n)
Space - O(n)

*/

const swap=(curr,prev,head,isFirstSwap,currFirstNode,firstNodeInPrevIteration)=>{
    if(curr===null){
        return head;
    }
    for(let i=1;i<=2 && curr!=null;i++){
        const next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    if(isFirstSwap){
        head=prev;
        isFirstSwap=false;
    }
    else{
        firstNodeInPrevIteration.next=prev;
    }
    firstNodeInPrevIteration=currFirstNode;
    currFirstNode=curr;
    prev=null;
    return swap(curr,prev,head,isFirstSwap,currFirstNode,firstNodeInPrevIteration);
}

const swapPairs2 = function(head) {

    if(head===null){
        return null;
    }
    
    return swap(head,null,head,true,head,null);
    
};