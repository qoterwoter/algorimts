let fs = require('fs')
let data = fs.readFileSync('input.txt').toString().split('\n')
fs.writeFileSync('output.json',('{\n\t"Сортировка вставками": [\n'))
for(let a = 0; a < data.length-1; a++) {
    let start = new Date().getTime();
    arr = data[a].split(', ').map((item)=>{
        return parseInt(item, 10)
    })
    // Сортировка
    // for (let i = 0; i < arr.length; i++) {
    //     let v = arr[i],
    //         j = i - 1;
    //     while (j >= 0 && arr[j] > v) {
    //         arr[j + 1] = arr[j];
    //         j--;
    //     }
    //     arr[j + 1] = v;
    // }
    for (let i = 1;i < arr.length; i++) {
        let key = arr[i]
        j = i - 1;
        while(j>=0&&arr[j]>key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key
    }
    console.log(arr)
    let end = new Date().getTime();
    // fs.appendFileSync('output.txt',(arr.length+ " | " + end-start+'ms\n'))
    // fs.appendFileSync('output.txt',(`${arr.length}  |  ${end-start}ms\n`))
    fs.appendFileSync('output.json',(`\t{\n\t\t"Длинна масива": ${arr.length},\n\t\t"Время выполнения": "${end-start}ms"\n\t}`))
    if(a!==data.length-2) {
        fs.appendFileSync('output.json',(',\n'))
    } else {
        fs.appendFileSync('output.json',('\n'))
    }
}
fs.appendFileSync('output.json',(`]}`))