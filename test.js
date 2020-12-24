state = {
    person: [
        {
            name: "xxx1",
            category: "1",
        },
        {
            name: "xxx1",
            category: "1",
        },
        {
            name: "xxx2",
            category: "2",
        },
        {
            name: "xxx2",
            category: "2",
        },
        {
            name: "xxx3",
            category: "3",
        },
        {
            name: "xxx4",
            category: "4",
        },
        {
            name: "xxx4",
            category: "4",
        },
        {
            name: "xxx4",
            category: "4",
        },
        {
            name: "xxx5",
            category: "5",
        },
    ],
};
var count = 0;
const test = state.person.map((x, y, z) => {
    if (x.category === "4") {
        while (count < 2) {
            console.log(x.name);
            count++;
        }
    }
});
