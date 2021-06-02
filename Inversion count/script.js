const fs = require("fs");
// Чтения файла
function readingFile() {
    let data = fs.readFileSync("input.txt", 'utf8').toString()
    return data
}
// Перевод прочитанных данных из файла в массив цифр
function toArray(data) {
    data = data.split(' ').map(function(item) {
        return parseInt(item, 10)
    })
    return data;
}
// Функция для полной перезаписи файла
function reWriteFile(text) {
    let data = fs.writeFileSync('output.txt', (text + " "))
}

function mergeSort(arr) {
    if (arr.length == 1)
        return arr;
    if (arr.length > 1) {
        let breakpoint = Math.ceil((arr.length / 2));
        let listL = arr.slice(0, breakpoint);
        let listR = arr.slice(breakpoint, arr.length);
        listL = mergeSort(listL);
        listR = mergeSort(listR);
        let a = merge(listL, listR);
        return a;
    }
}

function merge(listL, listR) {
    let result = [];
    while (listL.length && listR.length) {
        if (listL[0] <= listR[0]) {
            result.push(listL.shift());
        } else {
            inversionCount += listL.length;
            result.push(listR.shift());
        }
    }
    while (listL.length)
        result.push(listL.shift());

    while (listR.length)
        result.push(listR.shift());
    return result;
}
let arr = toArray(readingFile())
arr.shift();
let inversionCount = 0;
mergeSort(arr);
reWriteFile(inversionCount)