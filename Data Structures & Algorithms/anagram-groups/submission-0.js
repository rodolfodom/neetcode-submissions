class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {}
        let anagramsArr = [];

        for(let i = 0; i < strs.length; i++){
            const sorted = strs[i].split('').sort().join('')
            if(anagrams[sorted]){
                anagrams[sorted].push(strs[i])
            }else{
                anagrams[sorted]=[strs[i]]
            }
        } 

        return Object.values(anagrams);
        
    }

}
