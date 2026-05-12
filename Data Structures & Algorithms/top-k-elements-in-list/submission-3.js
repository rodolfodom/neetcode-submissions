class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frecuency = new Map()
        const res = [];

        for(let num of nums){
            if(!frecuency.has(num)){
                frecuency.set(num, 0);
            }
            frecuency.set(num, frecuency.get(num) + 1)
        }

        const counter = Array.from(frecuency.values()).sort((a, b) => b - a)

        for(let i = 0; i < k; i++){
            for(let val of Array.from(frecuency.keys())){
                if(frecuency.get(val) === counter[i] && res.indexOf(val) === -1){
                    res.push(val)
                }
            }
        }

        return res;
    }
}
