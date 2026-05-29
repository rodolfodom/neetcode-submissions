class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = 1
        let max = 0

        while(l < heights.length - 1){
            //console.log({l,r})
            const calc = Math.min(heights[l], heights[r]) * (r - l)
            if( calc > max){
                max = calc
            }
            if(r >= heights.length - 1){
                l++
                r = l    
            }
            r++
        }

        return max
    }
}
