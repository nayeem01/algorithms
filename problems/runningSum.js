var runningSum = function (nums) {
    let i = 0;
    let prev = 0;
    let temp = [];
    while (i < nums.length) {
        if (i == 0) {
            temp[i] = nums[i];
        } else {
            prev = temp[i - 1];

            temp[i] = prev + nums[i];
        }
        i++;
    }
    return temp;
};
arr = [1, 2, 3, 4];
console.log(runningSum(arr));
