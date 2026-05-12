class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let minLength = Infinity;
        let totalSum = 0;

        for(let right = 0; right < nums.length; right++){
            totalSum += nums[right];
            while(totalSum >= target){
                let currentLength = right - left + 1;
                if(currentLength < minLength){
                    minLength = currentLength;
                }
                totalSum -= nums[left];
                left++;
            }
        }

        return minLength === Infinity? 0:minLength;
    }
}
