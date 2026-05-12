class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let resArray =  strs.map((str)=> `:#${str.length}#:${str}`)
       return resArray.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let current = 0;
        while(current <= str.length){
            if(str[current] === ":" && str[current + 1] === "#"){
                let final = current + 2
                while(str[final] != "#" && str[final + 1] !== ":"){
                    final++
                }
                let wordLength = Number.parseInt(str.slice(current + 2, final))
                const word = str.slice(final+2, final + 2 + wordLength)
                res.push(word)
                current = final + 2 + wordLength;
            } else {
                current++
            }
        }
        return res;
    }
}
