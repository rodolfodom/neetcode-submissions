class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitizedS = s.toLowerCase()
        let l = 0;
        let r = s.length - 1;

        while(l < r){
            console.log("*****************")
            console.log("l: ", sanitizedS[l])
            console.log("r: ", sanitizedS[r])
            if(!/[a-zA-z0-9]/i.test(sanitizedS[l])){
                l++;
                continue;
            }else if(!/[a-zA-z0-9]/i.test(sanitizedS[r])){
                r--;
                continue;
            }else if(sanitizedS[l] != sanitizedS[r]){
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
