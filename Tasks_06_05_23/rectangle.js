function Rectangle(height, width){
    this.width = width
    this.height = height

}

Rectangle.prototype.getArea = function(){
    return this.height * this.width
}

const shapeOne = new Rectangle(4,8);

console.log(shapeOne.getArea())