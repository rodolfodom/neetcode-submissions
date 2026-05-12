class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length)
        for(let i = 0; i < nums.length; i++){
            //console.log("******** iteracion **********")
            let product = 1;
            for(let j = 0; j < nums.length; j++){
                //console.log({product, numJ: nums[j], numI: nums[i]})
                if(j!= i){
                    product*=nums[j]
                };
            }
            res[i] = product
        }

        return res;
    }
}
