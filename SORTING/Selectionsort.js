let arr = [40, 10, 30, 20];

for(let i = 0 ; i < arr.length - 1 ; i++){

    let min = i;

    for(let j = i + 1 ; j < arr.length ; j++){

        if(arr[j] < arr[min]){
            min = j;
        }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

    }
}
console.log(arr);