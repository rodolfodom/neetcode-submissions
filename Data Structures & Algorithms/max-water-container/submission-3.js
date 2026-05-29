class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let max = 0

        while(l < r){
            const calc = Math.min(heights[l], heights[r]) * (r - l)
            if( calc > max){
                max = calc
            }
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }
        }

        return max
    }
}
