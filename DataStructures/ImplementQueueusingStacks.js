class MyQueue {
    constructor() {
        this.vals = []
    }

    push(x){
        this.vals.push(x)
    }

    pop() {
        return this.vals.shift()
    }

    peek(){
        return this.vals[0]
    }

    empty(){
        return !this.vals.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */