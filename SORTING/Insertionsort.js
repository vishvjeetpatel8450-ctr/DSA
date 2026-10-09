let arr = [40, 30, 10, 20, 50];

let value = 70;
let index = 2;

for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]
}
arr[index] = value;

console.log(arr);