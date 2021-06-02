let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.txt',('Сортировка пузырьком:\n'))

function bubbleSort(arr) {
    for (let i = 0, last_i=arr.length-1; i < last_i; i++) {
        for(let j = 0,last_j = last_i-i;j<last_j;j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr)
}

bubbleSort([5,3,6,2,1,1])