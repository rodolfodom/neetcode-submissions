class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS = s.split('').sort();
        const sortedT = t.split('').sort();

        const maxLength = Math.max(sortedS.length, sortedT.length)

        for(let i = 0; i < maxLength; i++){
            if(sortedS[i] != sortedT[i]) return false;
        }

        return true;
    }
}
