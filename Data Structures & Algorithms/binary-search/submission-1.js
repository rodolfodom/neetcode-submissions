class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0,
            right = nums.length - 1;
        
        while(left <= right){
            const middle = Math.floor((left + right)/2)
            const middleValue = nums[middle]
            if(middleValue === target){
                return middle;
            }else if(middleValue < target){
                left = middle + 1;
            }else{
                right = middle - 1;
            }
        }

        return -1
    }
}
