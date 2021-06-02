let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.txt',('Сортировка выбором:\n'))
for(let a = 0; a < data.length-1; a++) {
    let start = new Date().getTime();
    arr = data[a].split(', ').map((item)=>{
        return parseInt(item, 10)
    })
    let minIndex
    for(let i = 0; i < arr.length-1;i++) { 
        minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex!==i) {
            [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    let end = new Date().getTime();
    console.log(arr)
    // fs.appendFileSync('output.txt',(arr.length+ " | " + end-start+'ms\n'))
    fs.appendFileSync('output.txt',(`${arr.length}  |  ${end-start}ms\n`))
}