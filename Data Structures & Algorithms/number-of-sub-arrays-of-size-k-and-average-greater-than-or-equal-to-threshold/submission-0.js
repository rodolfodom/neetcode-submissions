class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let left = 0;
        let subsetsCounter = 0;
        let currentSum = 0;
        let elementsInSummatory = 0;

        for(let right = 0; right < arr.length; right++){
            console.log("currentSum: ", currentSum);
            console.log("elementos: ", elementsInSummatory)
            currentSum+=arr[right];
            elementsInSummatory++;
            
            if(elementsInSummatory > k){
                console.log("elementos en window superaron k")
                currentSum -= arr[left];
                left++;
                elementsInSummatory--;
            }
            if(elementsInSummatory === k){
                console.log("elememntos en window: ", elementsInSummatory);
                if((currentSum / k) >= threshold) subsetsCounter++;
            }
        }

        return subsetsCounter;
    }
}
