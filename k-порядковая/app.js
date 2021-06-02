const fs = require("fs");

// Чтения файла
const readingFile = (fileName) => fs.readFileSync(fileName, 'utf8').toString();

// Функция для полной перезаписи файла
const reWriteFile = (text) => fs.writeFileSync('output.txt', (text + "\n"));


// Перевод прочитанных данных из файла в массив цифр
const parseData = (data) => data.split(' ').map((item) => parseInt(item, 10));

function quickSort(arr) {
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
                let temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
                left++
                right--
            }
        }
        quickSort(nums, start, right)
        quickSort(nums, left, end)
    }
    return sortArray(arr);
}

// Генерация массива по алгоритму
const arrCreate = (P, N, Q, V) => {
    let A = [P];
    let lastGenerated = P;
    for (let i = 1; i < N; i++) {
        lastGenerated = (lastGenerated * Q) % V 
        A[i] = lastGenerated;
        // A = A.sort((a, b) => a - b);
    }
    return quickSort(A)
};

data = parseData(readingFile('input.txt'));

let Q = data[0];
let V = data[1];
let P = data[2];
let N = data[3];
let K = data[4] -1;

A = arrCreate(P, N, Q, V);

reWriteFile(A[K])