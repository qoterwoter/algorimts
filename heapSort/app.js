let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.txt',('Пирамидальная сортировка:'))

let sortArray = function(array) { 
    if(array.length < 2) return array;
    let length = array.length;
    for(let i = Math.floor(length/2-1); i >= 0; i--) {
        heapify(array, i, length);
    }
    for(let j = length-1; j >= 0; j--) {
        [array[j], array[0]] = [array[0], array[j]];
        heapify(array, 0, j);
    }
    return array;
}

let heapify = (array, i, length) => {
    let biggest = i;
    let left_child = i * 2 + 1;
	let right_child = left_child + 1;
    if(left_child < length && array[biggest] < array[left_child]) biggest = left_child;
    if(right_child < length && array[biggest] < array[right_child]) biggest = right_child;
    if(biggest != i) {
        [array[biggest], array[i]] = [array[i], array[biggest]];
        heapify(array, biggest, length);
    }
}

for (let i = 0; i < data.length-5;i++) {
    let start = new Date().getTime();
    let arr = data[i].split(', ').map(item=>parseInt(item))
    arr = sortArray(arr)
    console.log(arr)
    let end = new Date().getTime();
    fs.appendFileSync('output.txt',(`\nДлинна масива: ${arr.length},\nВремя выполнения: ${end-start}ms`));
}