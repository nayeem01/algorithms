// var fib = function (n) {
//     let arr = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }

//     return arr;
// };

// console.log(fib(2));

const n = 1;
let n1 = 0,
    n2 = 1,
    next;

if (n <= 1) {
    console.log(0);
} else {
    for (let i = 2; i <= n; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    console.log(n2);
}
