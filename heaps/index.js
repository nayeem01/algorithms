class Heap {
    constructor() {
        this.data = [];
    }

    getParents(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeft(index) {
        return index * 2 + 1;
    }
    getRight(index) {
        return index * 2 + 2;
    }
    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    insert(value) {
        this.data[this.data.length] = value;
        this.heapifyUp();
    }
    heapifyUp() {
        let currentIndex = this.data.length - 1;
        while (
            this.data[currentIndex] > this.data[this.getParents(currentIndex)]
        ) {
            this.swap(currentIndex, this.getParents(currentIndex)); // value swap

            currentIndex = this.getParents(currentIndex); //index change
        }
    }

    remove() {
        this.swap(this.data.length - 1, 0);
        this.data.length--;
        this.heapifyDown();
        console.log(heap.data);
    }
    heapifyDown() {
        let currentIndex = 0;
        while (this.data[this.getLeft(currentIndex)] != undefined) {
            let max = this.getLeft(currentIndex);
            if (
                this.data[this.getLeft(currentIndex)] >
                    this.data[this.getRight(currentIndex)] &&
                this.data[this.getRight(currentIndex)] != undefined
            ) {
                max = this.getLeft(currentIndex);
            }
            if (this.data[currentIndex] < this.data[max]) {
                this.swap(currentIndex, max);
                currentIndex = max;
            } else {
                return;
            }
        }
    }
}

var heap = new Heap();
console.log(heap);
var i = 10;
// while (i <= 50) {
//     heap.insert(i);
//     i = i + 10;
// }
heap.insert(10);
heap.insert(20);
heap.insert(60);
heap.insert(40);
heap.insert(50);
console.log(heap.data);
console.log(heap.data.length);
heap.remove();
