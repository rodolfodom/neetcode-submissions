/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 0, right = n;

        while(left <= right){
            let middle = Math.floor((left + right)/2);
            let guessing = guess(middle)
            if(guessing === -1){
                right = middle - 1;
            }else if(guessing === 1){
                left = middle + 1;
            }else{
                return middle;
            }
        }

        return -1;
    }
}
