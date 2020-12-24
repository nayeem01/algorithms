let idList = [11, 11, 13, 12, 13, 12, 15];
let arr = idList.sort();

function cart(element, arr) {
  let times = 0;
  for (let index = 0; index < arr.length; index++) {
    if (element == arr[index]) {
      times++;
    }
  }

  return times;
}

let mySet = Array.from(new Set(arr));

mySet.map((x) => {
  let times = cart(x, arr);
  console.log(x, times);
});
