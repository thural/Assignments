Array.prototype.getLast = function(){
    if (this.length > 0) return this[this.length -1]
    return -1
}

console.log([1,2,3].getLast())