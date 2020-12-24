let arr = [3, 5, -4, 8, 11, 1, -1, 6];
terget = 10;

// solution 1
// o(n) and space o(n)
const sum = (arr, t) => {
    dictionary = {};

    for (i in arr) {
        x = t - arr[i];
        if (x in dictionary) {
            return [x, arr[i]];
        } else {
            dictionary[arr[i]] = true;
        }
    }
    return [];
};

//console.log(sum(arr, terget));

//solution 2(with binary search)
// o(nlogn) and space o(1)
const sumb = (arr, t) => {
    arr.sort((a, b) => a - b);

    left = 0;
    right = arr.length - 1;
    while (left < right) {
        currentnum = arr[left] + arr[right];
        if (currentnum == t) {
            return [arr[left], arr[right]];
        } else if (currentnum < t) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};
console.log(sumb(arr, terget));
