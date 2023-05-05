function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return `Hi, I'm ${this.name} and I'm ${this.age}`
}

const john = new Person("John", 26)

console.log(john.introduce())