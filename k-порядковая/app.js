const fs = require("fs");
let data = fs.readFileSync('input.txt', 'utf8').toString()
console.log(data)
data = data.split(' ').map(function(item) {
    return parseInt(item, 10)
})
let Q = data[0]; 
let V = data[1];
let P = data[2]; // Первый элемент последовательности
let N = data[3]; // Длинна массива
let K = data[4]; // К-ое число
let A = [P];
if (Q*V>=0 && Q*P <= 2**31-1 && 1<=K<=N<=4*10**7 && V!=0 && Q!=0) {
    let lastGenerated = P;
    for (let i = 1; i < N; i++) {   // Генерация последовательности
        // A[i] = (A[i - 1] * Q) % V 
        lastGenerated = (lastGenerated * Q) % V 
        A.push(lastGenerated)
        // A = A.sort((a, b) => {
        //     return a - b
        // });
        // A = mergeSort(A)
    }
} 

console.log("Сгенерированый массив: ",A)
data = A[K - 1]
console.log(data)
fs.writeFileSync('output.txt', (data.toString())) 

function mergeSort(arr) {
    const sortArray = nums => {
        if(nums.length <= 1) return nums
        
        const middle = Math.floor(nums.length / 2)
        const left = nums.slice(0, middle)
        const right = nums.slice(middle)
        
        return merge(sortArray(left), sortArray(right))
    };
    
    const merge = (left, right) => {
        const result = []
        
        while (left.length && right.length) {
            if(left[0] <= right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
        
        return result.concat(left, right)
    }
    return sortArray(arr);
}
