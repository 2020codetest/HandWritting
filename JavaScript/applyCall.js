Function.prototype.mycall = function(context) {
    context = context ? Object(context) : window
    var funName = new Date().getTime()
    context[funName] = this
    var args = [...arguments].slice(1)
    var result = context[funName](...args)
    delete context[funName]
    return result
}

Function.prototype.myapply = function() {
    context = arguments[0]
    context = context ? Object(context) : window
    var funName = new Date().getTime()
    context[funName] = this
    var result = context[funName](...arguments[1])
    delete context[funName]
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
