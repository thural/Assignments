function generatePath(){
    const args = [...arguments];
    //const args = Array.from(arguments)
    return args.join("/")
}

function generatePath2(...args){
    return args.join("/")
}

console.log(generatePath("abc", "bcd"))