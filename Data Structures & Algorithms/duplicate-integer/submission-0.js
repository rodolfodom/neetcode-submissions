class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frecuency = {};
        for(let num of nums){
            if(!!frecuency[num]){
                return true;
            }else{
                frecuency[num] = 1;
            }
        }

        return false;
    }
}
