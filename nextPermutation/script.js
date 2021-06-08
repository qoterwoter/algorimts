let nextPermutation = function(nums) {
    console.log(nums);
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = nextLarge(i);
            console.log('nums[large], nums[i]:',nums[large],nums[i]);
            [nums[i], nums[large]] = [nums[large], nums[i]];
            reverse(i+1);
            return nums;
        }
    }
    nums.reverse()
    function reverse(nextI) {
        console.log(nums)
        let start = nextI, end = nums.length-1;
        while(start < end) {
            console.log('nums[start], nums[end]',nums[start], nums[end]);
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    function nextLarge(currentI) {
        for(let i = nums.length-1; i > currentI; i--) {
            if(nums[i] > nums[currentI]) return i;
        }
    }
};
let arr = [5,8,7,6,3,1]
console.log(nextPermutation(arr))