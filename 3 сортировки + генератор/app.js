const fs = require("fs");
const start = new Date().getTime();
// Чтения файла
function readingFile(fileName) {
    let data = fs.readFileSync(fileName, 'utf8').toString().split('\n');
    return data
}
// Перевод прочитанных данных из файла в массив цифр
function toArray(data) {
    data = data.split(', ').map(function(item) {
        return parseInt(item, 10)
    })
    return data;
}
// Перевод данных из массива в строку для записи в конечный файл
function toString(data) {
    let strData = '';
    for (let i = 0; i < data.length; i++) {
        if (i == data.length - 1) {
            strData += (data[i])
        } else {
            strData += (data[i] + ", ")
        }
    }
    return strData;
}
// Функция для полной перезаписи файла
function reWriteFile(text) {
    let data = fs.writeFileSync('output.txt', (text + "\n"))
}
// Функция для дополнения файла без перезаписи данных
function appendFile(text) {
    let data = fs.appendFileSync('output.txt', (text + "\n"))
}
// Сортировка пузырьком
function bubbleSort(arr) {
    let start = new Date().getTime();
    for (let i = 0, last_i = arr.length - 1; i < last_i; i++) {
        for (let j = 0, last_j = last_i - i; j < last_j; j++) {
            if (arr[j] > arr[j + 1]) {
                let switched = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = switched;
            }
        }
    }

    let end = new Date().getTime();
    return end - start;
}

function selectionSort(arr) {
    let start = new Date().getTime();
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    let end = new Date().getTime();
    return end - start;
}

function insertionSort(arr) {
    let start = new Date().getTime();
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i],
            j = i - 1;
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = v;
    }
    let end = new Date().getTime();
    return end - start;
};

function quickSort(arr) {
    let start = new Date().getTime();
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    let end = new Date().getTime();
    return end - start;
}

function mergeSort(arr) {
    if (arr.length > 1) {
        middle = Math.floor(arr.length / 2)
        let lefthalf = arr.slice(0, middle);
        let righthalf = arr.slice(middle, arr.length);

        mergeSort(lefthalf)
        mergeSort(righthalf)
        let b = 0
        for (let a = 0;
            (a < lefthalf.length && b < righthalf.length); a++) {}
    }

}
console.log('Начало выполнение')
str = readingFile('input.txt')
arr1 = toArray(str[0])
arr2 = toArray(str[1])
arr3 = toArray(str[2])
arr4 = toArray(str[3])
arr5 = toArray(str[4])
reWriteFile("| Размер | Пузырьком | Выбором   | Вставками | Быстрая |")
appendFile(`| ${arr1.length}     | ${bubbleSort(arr1)}ms       | ${selectionSort(arr1)}ms       | ${insertionSort(arr1)}ms       | ${quickSort(arr1)}ms     |`)
appendFile(`| ${arr2.length}    | ${bubbleSort(arr2)}ms       | ${selectionSort(arr2)}ms       | ${insertionSort(arr2)}ms       | ${quickSort(arr2)}ms     |`)
appendFile(`| ${arr3.length}   | ${bubbleSort(arr3)}ms       | ${selectionSort(arr3)}ms       | ${insertionSort(arr3)}ms       | ${quickSort(arr3)}ms     |`)
appendFile(`| ${arr4.length}  | ${bubbleSort(arr4)}ms     | ${selectionSort(arr4)}ms      | ${insertionSort(arr4)}ms       | ${quickSort(arr4)}ms     |`)
appendFile(`| ${arr5.length} | ${bubbleSort(arr5)}ms   | ${selectionSort(arr5)}ms    | ${insertionSort(arr5)}ms       | ${quickSort(arr5)}ms     |`)

const end = new Date().getTime();
console.log(`Выполнение завершено. Время на выполнение: ${end - start}ms`)