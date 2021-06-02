let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.txt',('Сортировка пузырьком:\n'))
console.time('Время на выполнение') ;
for(let a = 0; a < data.length-1; a++) {
    let start = new Date().getTime();
    let arr = data[a].split(', ').map((item)=>{
        return parseInt(item, 10)
    })
    for (let i = 0, last_i = arr.length - 1; i < last_i; i++) {
        for (let j = 0, last_j = last_i - i; j < last_j; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr)
    let end = new Date().getTime();
    fs.appendFileSync('output.txt',(`${arr.length}  |  ${end-start}ms\n`))
}
console.timeEnd('Время на выполнение');