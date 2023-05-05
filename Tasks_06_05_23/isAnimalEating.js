function Animal(name){
    this.name = name;
}

Animal.prototype.eating = function(){
    return `${this.name} is eating`
}

const cat = new Animal("cat")

console.log(cat.eating())