class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    printList() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    reverselist(){
        let current = this.head
        let prev = null
        let nextItem = null
        
        while(current != null){
            nextItem = current.next
            current.next = prev
            prev = current
            console.log(prev)
            current = nextItem
        }
        this.head = prev
    }
}

const ll = new LinkedList()

for (let i = 0; i < 5; i++) {
    ll.insertLast(i);   
}
ll.reverselist()
ll.printList()