class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            console.log("map: ", map);
            console.log("Current value: ", nums[i]); 
            const complement = target - nums[i];
            console.log("complemet: ", complement);
            if(map.has(complement)){
                console.log("complemet in the map")
                const complementIndex = map.get(complement);
                return i < complementIndex? [i, complementIndex] : [complementIndex, i];
            }else{
                console.log("complement not in the map")
                map.set(nums[i], i);
            }
        }

        return [];

    }
}
