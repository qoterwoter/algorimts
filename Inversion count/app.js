const fs = require("fs");
const input = fs.readFileSync('input.txt', 'utf8');
const data = input.replace(/\s/, ' ').split(' ').map(item => parseInt(item, 10));

// console.log(data);

const isValidElementsCount = data[0] === data.slice(1).length;

function merge(arr, left, right) {
    let i = 0;
    let j = 0;
    let count = 0;
    console.log("Массив:",arr,'Left:',left,'Right:',right)
    
    while (i < left.length || j < right.length) {
        if (i === left.length) {
            arr[i+j] = right[j];
            console.log('i=left',arr[i+j])
            j++;
        } else if (j === right.length) {
            arr[i+j] = left[i];
            console.log('(j===right) arr[i+j]:',arr[i+j],'j:',j,'i:',i,'r.len:',right.length)
            i++;
        } else if (left[i] <= right[j]) {
            arr[i+j] = left[i];
            console.log('left[i]<right[j]:',arr[i+j],'j:',j,'i:',i,'r[j]:',right[j],'l[i]',left[i])
            i++;                
        } else {
            arr[i+j] = right[j];
            console.log('(else) arr[i+j]',arr[i+j],'j:',j,'r.len:',right.length)
            count += left.length-i;
            j++;
        }
    }
    console.log('Количество инверсий:',count)
    console.log(arr,'\n')
    return count;
}

function invCount(arr) {
    if (arr.length < 2)
        return 0;
    const m = (arr.length + 1) / 2;
    const left = arr.slice(0, m);
    const right = arr.slice(m, arr.length);

    return invCount(left) + invCount(right) + merge(arr, left, right);
}

const count = isValidElementsCount ? invCount(data.slice(1)) : 0;

fs.writeFileSync('output.txt', String(count));