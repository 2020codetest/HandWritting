Function.prototype.mycall = function(context) {
    context = context ? Object(context) : window
    context.fn = this
    var args = [...arguments].slice(1)
    var result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myapply = function() {
    context = arguments[0]
    context = context ? Object(context) : window
    context.fn = this
    var result = context.fn(...arguments[1])
    delete context.fn
    return result
}

function print(price) {
    return this.name + " " + price
}

var nameObj = {
    name: "my name"
}

console.log(print.mycall(nameObj, 1500))
console.log(print.myapply(nameObj, [1000]))
