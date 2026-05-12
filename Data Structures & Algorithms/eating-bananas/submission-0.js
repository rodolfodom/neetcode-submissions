class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    //
    minEatingSpeed(piles, h) {
        let bot = 1;
        let top = Math.max(...piles)

        while(bot <= top){
            let k = Math.floor((bot + top)/2)
            let hours = piles.reduce((a, b)=> a + Math.ceil(b/k), 0)
            if(hours > h){
                bot = k + 1;
            }else {
                top = k -1;
            }
        }

        return bot;


    }
}
