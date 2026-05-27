class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b)=> a - b)
        const result = {}
        // console.log({sortedNums})
        for(let i = 0; i < nums.length; i++){
            const target = sortedNums[i]
            let l = i + 1
            let r = nums.length - 1
            while(l < r){
                const sum = sortedNums[l] + sortedNums[r] + target
                // console.log({sum})
                if(sum === 0){
                    const array = [sortedNums[l], sortedNums[r], target]
                    const key = array.join("")
                    result[key] = array
                    l++
                }else if (sum > 0){
                    r--
                }else if (sum < 0){
                    l++
                }
            }
        }

        return Object.values(result)


    }
}
