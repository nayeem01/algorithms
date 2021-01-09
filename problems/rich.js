var maximumWealth = function (accounts) {
    let rich = 0;

    for (let i = 0; i < accounts.length; i++) {
        let j = 0,
            count = 0;

        while (j < accounts[i].length) {
            count = count + accounts[i][j];
            //console.log(count);
            // console.log(accounts[i][j]);
            j++;
        }
        if (count >= rich) rich = count;
    }
    return rich;
};
let accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
];
console.log(maximumWealth(accounts));
