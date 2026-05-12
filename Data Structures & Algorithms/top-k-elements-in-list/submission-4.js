class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frecuency = new Map()
        for (let num of nums){
            if(!frecuency.has(num)){
                frecuency.set(num, 1)
            }else{
                frecuency.set(num, frecuency.get(num) + 1)
            }            
        }
        const values = []
        const keys = []
        const topK = []

        frecuency.forEach((value, key) => {
            keys.push(key)
            values.push(value)
        })

        console.log({keys, values})

        for(let i = 0; i < k; i++){
            const max = Math.max(...values)
            console.log({max})
            const maxIdx = values.indexOf(max)
            console.log({maxIdx})
            values[maxIdx] = -1
            topK.push(keys[maxIdx])
        }

        return topK
    }
}
