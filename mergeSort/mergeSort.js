let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.txt',('Сортировка слиянием:\n'))
let sortArray = function(array) {
    let len = array.length;
    if(len < 2) return array;
    const mid = Math.floor(len / 2);
    const left = sortArray(array.slice(0, mid));
    const right = sortArray(array.slice(mid, len));
    return merge(left, right);
};

let merge = function(left, right) {
    let res = [];
    while(left.length && right.length) {
        res.push( (left[0] < right[0]) ? left.shift() : right.shift() );
    }
    return res.concat(left, right);
}
for(let a = 0; a < data.length-1; a++) {
    arr = data[a].split(', ').map((item)=>{
        return parseInt(item, 10)
    })
    let start = new Date().getTime();
    console.log(sortArray(arr))
    let end = new Date().getTime();
    fs.appendFileSync('output.txt',(`Длинна масива: ${arr.length},\nВремя выполнения: ${end-start}ms\n`))
}
