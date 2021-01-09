const merge = (a1, a2) => {
    let i = 0,
        j = 0;
    let newarr = [];
    while (i < a1.length || j < a2.length) {
        if (a1[i] >= a2[j]) {
            newarr.push(a2[j]);
            j++;
        } else {
            newarr.push(a1[i]);
            i++;
        }
    }
    while (i < a1.length) {
        newarr.push(a1[i]);
        i++;
    }
    while (j < a2.length) {
        newarr.push(a2[j]);
        j++;
    }
    return newarr;
};
a1 = [1, 10, 50];
a2 = [2, 14, 99, 100];

console.log(merge(a1, a2));
