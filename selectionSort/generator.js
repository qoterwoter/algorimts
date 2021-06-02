const fs = require("fs");

// Функция для полной перезаписи файла
function reWriteFile(text) {
    let data = fs.writeFileSync('input.txt', (text + "\n"))
}
// Функция для дополнения файла без перезаписи данных
function appendFile(text) {
    let data = fs.appendFileSync('input.txt', (text + "\n"))
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
// функция, генерирующая массив
function generator(leng) {
    let arr = []
    while (arr.length < leng) {
        let randomnumber = Math.floor(Math.random() * leng) + 1;
        if (arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return toString(arr)
}
reWriteFile(generator(10))
appendFile(generator(100))
appendFile(generator(1000))
appendFile(generator(10000))
appendFile(generator(100000))