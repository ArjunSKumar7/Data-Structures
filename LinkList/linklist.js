// class Node{
//     constructor(data,next=null){
//         this.data=data;
//         this.next=next;
//     }
// }

// class LinkedList{ 
//     constructor(){
//         this.head = null;
//         this.size =0;
//     }

// insertFirst(data){
//     this.head= new Node(data,this.head)
// }


// }



// const l1 = new LinkedList()

// l1.insertFirst(100)
// l1.insertFirst(200)

// console.log(l1)


// class LinkedList
// {
//     constructor(data){
//         this.head={
//             value:data,
//             next:null
//         }
//         this.tail = this.head
//         this.length =1;
//     }

//     append(data){
//         const newNode ={
//             value: data,
//             next:null
//         }
//  this.tail.next=newNode;
//  this.tail = newNode;
// this.length++

//     }

//     prepend(data){
//         const newNode={
//             value:data, 
//             next:null

//         }
//         newNode.next= this.head
//         this.head =newNode

//     }


    

// }

// const myList = new LinkedList(10)
// myList.append(16)
// myList.append(20)
// myList.prepend(2)
// console.log(myList)


class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    
//     insert(index, data) {
//         if (index > this.length) {
//             return 'Error: index out of range';
//         }
//         const newNode = new Node(data);
//         let currentNode = this.head;
//         let currentIndex = 0;
//         while (currentIndex < index - 1) {
//             currentNode = currentNode.next;
//             currentIndex++;
//         }
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//         this.length++;
//     }

traversing(req){
    let counter =0;
    let currentNode = this.head

    while(counter!=req){
        counter++
        currentNode==currentNode.next
    }

    return currentNode

}


insert_index(index, data) {
            if (index > this.length) {
                return console.log('Error: index out of range');
            }
            if (index ==0) {
                
                this.prepend(data)
            }else{  

                const newNode = new Node(data);
                const leadernode = this.traversing(index-1)
                const nextnode = leadernode.next
    
                leadernode.next= newNode;
                newNode.next=nextnode;
            }
            


}


insert_after(value, data) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            const newNode = new Node(data);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length++;
            return;
        }
        currentNode = currentNode.next;
    }
    console.log(`Error: value not found in the linked list`);
}


insert_before(value, newValue) {
    if (!this.head) {
        return console.log('Error: linked list is empty');
    }

    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
       if (currentNode.value === value) {
            break;
        } 
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    if (!currentNode) {
        return console.log(`Error: value ${value} not found in the linked list`);
    }

    const newNode = new Node(newValue);
    newNode.next = currentNode;
    if (prevNode) {
        prevNode.next = newNode;
    } else {
        this.head = newNode; 
    }
    this.length++;
}


delete_index(index){
    const leadernode=this.traversing(index-1)
    const unwantednode =leadernode.next;
    const nextNode=unwantednode.next

    leadernode.next=nextNode;
    this.length--;
}

// delete_index(index) {
//     if (index >= this.length) {
//         console.log('Error: index out of range');
//         return;
//     }
//     if (index === 0) {
//         this.head = this.head.next;
//         this.length--;
//         return;
//     }
//     let previousNode = this.head;
//     let currentNode = this.head.next;
//     let currentIndex = 1;
//     while (currentIndex < index) {
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//         currentIndex++;
//     }
//     previousNode.next = currentNode.next;
//     this.length--;
// }


delete_value(value) {
    if (!this.head) {
        console.log('Error: linked list is empty');
        return;
    }
    if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
        return;
    }
    let previousNode = this.head;
    let currentNode = this.head.next;
    while (currentNode) {
        if (currentNode.value === value) {
            previousNode.next = currentNode.next;
            this.length--;
            return;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    console.log('Error: node with value not found');
}


reverse(){
    let prev =null;
    let current=this.head;
     
    while(current){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    this.tail=this.head
    this.head=prev
    // console.log("hi")
}

removeDuplicates() {
    let current = this.head;
    while (current && current.next) {
        if (current.value === current.next.value) {
            current.next = current.next.next;
            this.length--;
        } else {
            current = current.next;
        }
    }
}



printList() {
    let currentNode = this.head;
    let values = [];
    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(values.join('-->'));
}









} 



const myList = new LinkedList(10);
myList.append(16);
myList.append(20);
myList.append(20);
myList.append(20);
myList.prepend(2);
myList.printList();
myList.delete_index(1)
//  myList.insert_before(2, 15);

console.log(myList);
myList.printList();
myList.reverse()
console.log(myList);

// myList.removeDuplicates()























