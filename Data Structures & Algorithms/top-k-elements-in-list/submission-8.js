class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = new Array(nums.length).fill(null)
        const frecuency = new Map()
        for (let num of nums){
            if(!frecuency.has(num)){
                frecuency.set(num, 1)
            }else{
                frecuency.set(num, frecuency.get(num) + 1)
            }            
        }
        const topK = []

        frecuency.forEach((count, key) => {
            if(bucket[count]){
                bucket[count].push(key)
            }else{
                bucket[count] = [key]
            }
        })

        for(let i = bucket.length - 1; i >= 0 && topK.length < k; i--){
            if(bucket[i]){
                topK.push(...bucket[i])
            }
        }

        const sliced = topK.slice(k);
        console.log({topK, sliced})

        return topK
    }
}
