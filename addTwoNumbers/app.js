var addTwoNumbers = function(arr1, arr2) {
    let sum = [];
    let biggest = [];
    arr1>arr2 ? biggest = arr1 : biggest = arr2;
    for (let i = 0; i<biggest.length;i++) {
        sum[i] = arr1[i]+arr2[i]
    }
    
    for (let j = 0; j<biggest.length;j++) {
        if(arr1[j]+arr2[j]>=10) {
            sum[j+1]+=1
            sum[j]=0;
        }
    }
    return sum;
};
console.log(addTwoNumbers([2,4,3],[5,6,4]))