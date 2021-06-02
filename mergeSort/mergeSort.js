let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.txt',('Сортировка выбором:\n'))
var sortArray = function(nums) {
    let len = nums.length;
    if(len < 2) return nums;
    const mid = Math.floor(len / 2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid, len));
    return merge(left, right);
};

function merge(left, right) {
    let res = [];
    console.log('left->',left,'right->', right)
    while(left.length && right.length) {
        res.push( (left[0] < right[0]) ? left.shift() : right.shift() );
    }
    console.log('res',res.concat(left, right))
    return res.concat(left, right);
}
let start = new Date().getTime();
let nums = sortArray([4,3,1,2,5]);
console.log(nums)
let end = new Date().getTime();
fs.appendFileSync('output.txt',(`${nums.length}  |  ${end-start}ms\n`))
