var reverse = function (x) {
    let reverseNum = "";
    y = x.toString();
    let i = y.length - 1;
    while (i >= 0) {
        reverseNum = reverseNum + y[i];
        i--;
    }
    reverseNum = parseInt(reverseNum);
    if (
        reverseNum > Math.pow(2, 31) ||
        reverseNum * -1 < Math.pow(2, 31) * -1
    ) {
        return 0;
    } else if (x < 0) {
        return reverseNum * -1;
    } else {
        return reverseNum;
    }
};
x = -214;
console.log(reverse(x));
