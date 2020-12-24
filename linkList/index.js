//inital setup
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

    //insert first
    insertHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last
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
    //inset by index
    indexInsert(data, index) {
        let current, prev;
        let count = 0;
        current = this.head;
        if (index == 0) {
            this.head = new Node(data, this.data);
            this.size++;
        } else {
            var node = new Node(data);
        }
        while (count < index) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = node;
        node.next = current;
    }
    //get by index
    getItem(index) {
        let current;
        let count = 0;
        current = this.head;

        while (count < index) {
            count++;
            current = current.next;
            console.log(count);
        }
        console.log("current", current.data);
    }
    //remvove at index
    removeIndex(index) {
        let current, prev;
        let count = 0;
        current = this.head;

        if (index == 0) {
            return;
        }
        while (count < index) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = current.next;
    }
    //clear list
    clearAll() {
        this.head = null;
    }
    //print list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertHead(100);
ll.insertHead(200);
ll.insertHead(300);
ll.insertLast(400);

//ll.getItem(2);
//ll.indexInsert(500, 2);
//ll.removeIndex(2);
ll.clearAll();
ll.printList();
