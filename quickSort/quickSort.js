let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.json',('{\n\t"Быстрая сортировка":[\n'))

var sortArray = function(array) {
	let len = array.length;
	if(len < 2) return array;

	quickSort(array, 0, len-1)
	return array
};

var quickSort = function(array, start, end){
	if(start >= end) return
	[left, right] = [start, end] 
	let pivot = array[start];
	// console.log('pivot',pivot)
	while(left <= right) {
		while(left <= right && array[left] < pivot){
			// console.log('arr[l]',array[left])
			left++
		}
		while(left <= right && array[right] > pivot){
			// console.log('arr[r]',array[right])
			right--
		}
		if(left <= right){
 			[array[left], array[right]] = [array[right],array[left]]
			left++
			right--
		}
	}
	quickSort(array, start, right)
	quickSort(array, left, end)
}
for(let a = 0; a < data.length-1; a++) {
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
        fs.appendFileSync('output.json',(']\n'))
    }
}
fs.appendFileSync('output.json',('}'))