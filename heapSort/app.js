let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.json',('{\n\t"Сортировка вставками": [\n'))

var sortArray = function(nums) { 
    if(nums.length < 2) return nums;
    
    let size = nums.length;
    for(let i = Math.floor(size/2-1); i >= 0; i--) {
        heap_sort(nums, i, size);
    }
  
    for(let j = size-1; j >= 0; j--) {
        [nums[j], nums[0]] = [nums[0], nums[j]];
        heap_sort(nums, 0, j);
    }
    return nums;
}

var heap_sort = (nums, i, size) => {
    let p = i;
    let left = i * 2 + 1;
	let right = left + 1;
    if(left < size && nums[p] < nums[left]) p = left;
    if(right < size && nums[p] < nums[right]) p = right;
    
    if(p > i) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        heap_sort(nums, p, size);
    }
}
for (let i = 0; i < data.length-1;i++) {
    let start = new Date().getTime();
    let arr = data[i].split(', ').map(item=>parseInt(item))
    arr = sortArray(arr)
    console.log(arr)
    let end = new Date().getTime();
    fs.appendFileSync('output.json',(`\t{\n\t\t"Длинна масива": ${arr.length},\n\t\t"Время выполнения": "${end-start}ms"\n\t}`));
    if(i!==data.length-2) {
        fs.appendFileSync('output.json',(',\n'))
    } else { 
        fs.appendFileSync('output.json',('\n'))
    }
}
fs.appendFileSync('output.json',(']}'))
sortArray([4,2,1,3,5,6,7])