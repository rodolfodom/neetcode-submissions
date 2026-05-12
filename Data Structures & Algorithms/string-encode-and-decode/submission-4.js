class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ":/;"
       const str = strs.join(":;")
       return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log({str})
        if(str === ":/;") return []
        return str.split(":;")
    }
}
