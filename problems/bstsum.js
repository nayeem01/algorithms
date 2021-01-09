class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newValue = new Node(value);
        if (this.root == null) {
            this.root = newValue;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newValue;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newValue;
                    return this;
                }
                current = current.right;
            }
        }
    }
    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(this.root);

        return data;
    }
    getRoot() {
        return this.root;
    }
}
var t = new BinarySearchTree();
t.insert(3);
t.insert(20);
t.insert(9);
t.insert(15);
t.insert(7);
//t.insert(18);
//t.insert(null);
//console.log(t.DFSPreOrder());

// var rangeSumBST = function (root, low, high) {
//     var sum = 0;
//     function summing(node) {
//         if (node == null) {
//             return this;
//         }
//         if (node.value >= low && node.value <= high) {
//             sum = sum + node.value;

//             console.log(node.value);
//         }

//         summing(node.left);
//         summing(node.right);
//     }
//     // console.log(root);
//     summing(root);

//     return sum;
// };
let root = t.getRoot();
//console.log(rangeSumBST(root, 7, 15));

return dfs(root, 0);
    
function dfs(root, height) {
    if(root == null) {
        return height;
    }
    return Math.max(dfs(root.left, 
        height + 1), 
        dfs(root.right, height + 1));
}
console.log(root);
maxDepth(root);
