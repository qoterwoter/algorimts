let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.json',('{\n\t"Быстрая сортировка":[\n'))

var sortArray = function(nums) {
	let len = nums.length;
	if(len < 2) return nums;

	quickSort(nums, 0, len-1)
	return nums
};

var quickSort = function(nums, start, end){
	if(start >= end) return
	let left = start, right = end;
	let pivot = nums[Math.floor((start+end) / 2)];
	while(left <= right) {
		while(left <= right && nums[left] < pivot){
			left++
		}
		while(left <= right && nums[right] > pivot){
			right--
		}
		if(left <= right){
 			[nums[left], nums[right]] = [nums[right],nums[left]]
			left++
			right--
		}
	}
	quickSort(nums, start, right)
	quickSort(nums, left, end)
}

for(let a = 0; a < 1; a++) {
    arr = data[a].split(', ').map((item)=>{
        return parseInt(item, 10)
    })
    let start = new Date().getTime();
    console.log(sortArray(arr))
    let end = new Date().getTime();
    fs.appendFileSync('output.json',(`\t{\n\t\t"Длинна масива": ${arr.length},\n\t\t"Время выполнения": "${end-start}ms"\n\t}`))
    if(a!==data.length-2) {
        fs.appendFileSync('output.json',(',\n'))
    } else {
        fs.appendFileSync('output.json',('\n'))
    }
}
fs.appendFileSync('output.json',(']}'))
// fs.appendFileSync('output.txt',(arr.length+ " | " + end-start+'ms\n'))