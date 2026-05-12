class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frecuency = new Map();
        for(let num of nums){
            if(frecuency.has(num)){
                return true;
            }else{
                frecuency.set(num, 1);
            }
        }

        return false;
    }
}
