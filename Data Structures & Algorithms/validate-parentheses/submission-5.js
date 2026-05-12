class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openningStack = [];
        const openningCharacters = ['(', '[', '{'];
        const closingCharacters = [')', ']', '}'];
        let isValid = true;

        for (let i = 0; i < s.length; i++){
            if(openningCharacters.includes(s[i])){
                openningStack.push(s[i]);
            }else{
                const removedElement = openningStack.pop();
                if(
                    openningCharacters.indexOf(removedElement) != closingCharacters.indexOf(s[i])
                ){
                    isValid = false;
                    break;
                }
            }
        }

        if(openningStack.length > 0){
            isValid = false;
        }
    
        return isValid
    }
}
