// Stack class
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) return "Underflow";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
        return str;
    }
}
function sortStack(s1) {
    var temp;
    var s2 = new Stack(); //asssume sorted
    
    while (s1.isEmpty == 0) {
       temp = s1.pop()
       while (!s2.isEmpty && s2.peek() > temp) {
        s1.push(s2.pop())
    }
    s2.push(temp)
    }

    while(!s2.isEmpty == 0){
        s1.push(s2.pop())
    }
    s1.printStack()
}

var s1 = [4, 3, 5, 1, 2];
var stack = new Stack()
for (let index = 0; index < s1.length; index++) {
    stack.push(s1[index]);
    
}

sortStack(s1)
