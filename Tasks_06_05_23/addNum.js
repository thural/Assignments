function addNum(num){
    let total = 0;
    return function(){
        return total+=num
    }
}

const addOne = addNum(1)

console.log(addOne())
console.log(addOne())