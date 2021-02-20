/*

Two pointer - Iterative

Time - O(n)
Space - O(1)

*/

const reverseKGroup = function(head, k) {

    if(head.next===null){
        return head;
    }
    
    let size=0, curr=head;
    while(curr!=null){
        curr=curr.next;
        size++;
    }
    
    curr=head;
    let prev=null, isFirstIteration=true, currFirst=null, prevFirst=null, i=0;
    
    while(i<Math.floor(size/k)){
        
        currFirst=curr;
        
        let count=0;
        while(count<k && curr!=null){
            const next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
            count++;
        }
        
        if(isFirstIteration){
            head=prev;
            isFirstIteration=false;
        }
        else{
            prevFirst.next=prev;
        }
        
        prevFirst=currFirst;
        prev=null;
        i++;
    }
    
    prevFirst.next=curr;
    
    return head;
    
};

/*

Two pointer - Recursive

Time - O(n)
Space - O(n)

*/

const reverse=(prev,curr,head,isFirstIteration,currFirst,prevFirst,currIndex,size,k)=>{

    if(currIndex===Math.floor(size/k)){
        prevFirst.next=curr;
        return head;
    }
    
    currFirst=curr;

    let count=0;
    while(count<k && curr!=null){
        const next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
        count++;
    }

    if(isFirstIteration){
        head=prev;
        isFirstIteration=false;
    }
    else{
        prevFirst.next=prev;
    }

    prevFirst=currFirst;
    prev=null;
    currIndex++;
    
    return reverse(prev,curr,head,isFirstIteration,currFirst,prevFirst,currIndex,size,k);
    
}

const reverseKGroup2 = function(head, k) {

    if(head.next===null){
        return head;
    }
    
    let size=0, curr=head;
    while(curr!=null){
        curr=curr.next;
        size++;
    }
    
    return reverse(null,head,head,true,null,null,0,size,k);
    
};
