class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rowLastIndex = matrix[0].length - 1;
        let top = 0, 
        bottom = matrix.length - 1,
        left = 0, 
        right = rowLastIndex;
        let targetRow = -1;

        while(top <= bottom){
            let middle = Math.floor((top + bottom) / 2);
            if(matrix[middle][rowLastIndex] < target){
                top = middle + 1;
            }else if(matrix[middle][0] > target){
                bottom = middle - 1;
            }else{
                targetRow = middle;
                break;
            }
        }

        if(targetRow === -1){
            return false;
        }

        console.log("targetRow", targetRow)

        while(left <= right){
            let middle = Math.floor((right + left) / 2)
            console.log("left value: ", matrix[targetRow][left])
            console.log("right value: ", matrix[targetRow][right])
            if(matrix[targetRow][middle] < target){
                left = middle + 1;
            }else if(matrix[targetRow][middle] > target){
                right = middle - 1;
            }else{
                return true
            }
        }

        return false;
    }
}
