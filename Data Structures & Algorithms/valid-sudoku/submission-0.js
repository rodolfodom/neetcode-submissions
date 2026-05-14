class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowBucket = new Map()
        const columnBucket = new Map()
        const subBoxBucket = new Map()

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const el = board[i][j]
                if(el != "."){
                    if(!rowBucket.has(i)){
                        rowBucket.set(i, new Set([el]))
                    }else{
                        const bucket = rowBucket.get(i)
                        if(bucket.has(el)){
                            return false
                        }
                        bucket.add(el) 
                    }

                    if(!columnBucket.has(j)){
                        columnBucket.set(j, new Set([el]))
                    }else{
                        const bucket = columnBucket.get(j)
                        if(bucket.has(el)){
                            console.log({el, rowBucket, columnBucket, subBoxBucket, i, j})
                            return false
                        }
                        bucket.add(el) 
                    }
                    
                    const subBox = `${Math.floor(i / 3)}${Math.floor(j / 3)}`
                    if(!subBoxBucket.has(subBox)){
                        subBoxBucket.set(subBox, new Set([el]))
                    } else {
                        const bucket = subBoxBucket.get(subBox)
                        if(bucket.has(el)){
                            console.log("elemento repetido en fila: ", i, " y columna ", j)
                            console.log({el, i, j, subBox, subBoxBucket})
                            return false
                        }
                        bucket.add(el)
                    }
                }
            }
        }
        return true
    }
}
