class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowBucket = Array.from({length: 9},()=> new Set())
        const columnBucket = Array.from({length: 9},()=> new Set())
        const subBoxBucket = new Map()

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const el = board[i][j]
                if(el === ".") continue
                const subBox = `${Math.floor(i / 3)}${Math.floor(j / 3)}`
                if(rowBucket[i].has(el) || columnBucket[j].has(el) || !!subBoxBucket.get(subBox)?.has(el)) {
                    return false
                }
                rowBucket[i].add(el)
                columnBucket[j].add(el)
                subBoxBucket.set(subBox, subBoxBucket.get(subBox)?.add(el) || new Set([el]))
            }
        }
        return true
    }
}
