const fs = require("fs");
const input = fs.readFileSync('input.txt', 'utf8');
const data = input.replace(/\s/, ' ').split(' ').map(item => parseInt(item, 10));

// console.log(data);

const isValidElementsCount = data[0] === data.slice(1).length;

function merge(arr, left, right) {
    let i = 0;
    let j = 0;
    let count = 0;
    while (i < left.length || j < right.length) {
        if (i === left.length) {
            arr[i+j] = right[j];
            j++;
        } else if (j === right.length) {
            arr[i+j] = left[i];
            i++;
        } else if (left[i] <= right[j]) {
            arr[i+j] = left[i];
            i++;                
        } else {
            arr[i+j] = right[j];
            count += left.length-i;
            j++;
        }
    }
    return count;
}

function invCount(arr) {
    if (arr.length < 2)
        return 0;
    const middle = (arr.length + 1) / 2;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return invCount(left) + invCount(right) + merge(arr, left, right);
}

const count = isValidElementsCount ? invCount(data.slice(1)) : 0;

fs.writeFileSync('output.txt', String(count));