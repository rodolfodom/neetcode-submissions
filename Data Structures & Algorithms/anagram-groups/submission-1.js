class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {}
        for(let i = 0; i < strs.length; i++){
            const orderedWord = strs[i].split('').sort().join('')
            if (anagrams[orderedWord]){
                anagrams[orderedWord].push(strs[i])
            }else{
                 anagrams[orderedWord] = [strs[i]]
            }
        }

        return Object.values(anagrams)
    }
}
