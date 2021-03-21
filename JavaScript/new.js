function Car(name, price) {
    this.name = name;
    this.price = price;
}

function myNew() {
    var argLength = arguments.length;
    if (argLength <= 0) {
        return undefined
    }

    var func = Array.prototype.shift.call(arguments)
    if (typeof func !== "function") {
        return undefined
    }

    var obj = Object.create(func.prototype)
    func.apply(obj, arguments) 
    return obj
}

var car = myNew(Car, "BMW", 1000)
var newCar = new Car("BMW", 1500)
console.log(car.name, car.price)
console.log(newCar.name, newCar.price)
