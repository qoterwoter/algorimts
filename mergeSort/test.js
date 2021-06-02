function merge(arr, left, right) {
    let i = 0;
    let j = 0;
    let count = 0;
    
    while (i < left.length || j < right.length) {
        if (i === left.length) {
            arr[i+j] = right[j];
            j++;
        } else if (j === right.length) {
            arr[i+j] = left[i];
            i++;
        } else if (left[i] <= right[j]) {
            arr[i+j] = left[i];
            i++;                
        } else {
            arr[i+j] = right[j];
            count += left.length-i;
            j++;
        }
    }
    // console.log('Количество инверсий:',count)
    // console.log(arr,'\n')
    console.log(arr)
    return arr;
}

function sortArray(arr) {
    if (arr.length < 2) return
    const m = (arr.length + 1) / 2;
    const left = arr.slice(0, m);
    const right = arr.slice(m, arr.length);

    return  merge(arr, left, right);
}

console.log(sortArray([3,4,1,5,2,1,]))