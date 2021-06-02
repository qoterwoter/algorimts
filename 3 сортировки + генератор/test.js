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
    let n = arr.length;

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

function mergeLeftRight(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    const half = array.length / 2
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half)
    return mergeLeftRight(mergeSort(left), mergeSort(array))
}
console.log('Начало выполнение')
str = readingFile('input.txt')
arr1 = toArray(str[0])
reWriteFile("| Размер | Пузырьком | Выбором   | Вставками | Быстрая |")
console.log(arr1)
console.log(mergeSort(arr1))
const end = new Date().getTime();
console.log(`Выполнение завершено. Время на выполнение: ${end - start}ms`)