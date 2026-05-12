class MinStack {
    array;
    min;

    constructor() {
        this.array = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.min === null || val < this.min){
            this.min = val
        }
        this.array.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop();
        this.min = null
        for(let el of this.array){
            if(this.min === null || el < this.min ){
                this.min = el
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
