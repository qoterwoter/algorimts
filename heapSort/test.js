var sortArray = function(nums) { 
    if(nums.length < 2) return nums;
    
    let size = nums.length;

    console.log('size',size/2-1)
    for(let i = Math.floor(size/2-1); i >= 0; i--) {
        heap_sort(nums, i, size);
    }
  
    for(let j = size-1; j >= 0; j--) {
        [nums[j], nums[0]] = [nums[0], nums[j]];
        heap_sort(nums, 0, j);
    }
    console.log(nums);
    return nums;
}

var heap_sort = (nums, i, size) => {
    let p = i;
    let left = i * 2 + 1;
	let right = left + 1;
    console.log('left, right',nums[left],nums[right])
    // console.log('nums,i,size: ',nums,i,size)
    if(left < size && nums[p] < nums[left]) p = left;
    if(right < size && nums[p] < nums[right]) p = right;
    
    if(p > i) {
        console.log('p,i',nums[p],nums[i]);
        [nums[p], nums[i]] = [nums[i], nums[p]];
        heap_sort(nums, p, size);
    }
}

sortArray([4,2,1,3,5,6,7])