class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
	}
	insert(data){
		let node = new Node(data)
		let current;

		if(!this.head){
			this.head = node	
		} else {
		 	current = this.head;
			while(current.next){
				current = current.next
			}
			current.next = node
	}
		this.size++
	}
	printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList
ll.insert(100)
ll.insert(200)
ll.printList()