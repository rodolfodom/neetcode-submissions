class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(nums.length * 2)
        let currentNumsIndex = 0
        for(let i = 0; i < ans.length; i++){
            ans[i] = nums[currentNumsIndex]
            currentNumsIndex++
            if(currentNumsIndex > nums.length - 1){
                currentNumsIndex = 0
            }
        }

        return ans

    }
}
