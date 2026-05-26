class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let max = 0;
        for(let num of numsSet){
            if(!numsSet.has(num - 1)){
                let counter = 1;
                while(numsSet.has(num + counter)){
                    counter++
                }
                if(counter > max){
                    max = counter
                }
            }
        }

        return max

    }
}
