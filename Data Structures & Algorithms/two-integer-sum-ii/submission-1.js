class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let right = numbers.length - 1,
        left = 0

        while(left < right){
            const sum = numbers[left] + numbers[right]
            if(sum === target){
                return [left + 1, right + 1]
            } else if(sum > target){
                right--
            } else if(sum < target){
                left++
            }
        }

        
    }
}
