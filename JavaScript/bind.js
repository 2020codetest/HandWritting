Function.prototype.mybind = function() {
    var context = arguments[0]
    context = context ? Object(context) : window;
    var fn = this
    var args = [...arguments].slice(1)
    return function binded(...newArgs) {
        if (args && args.length) {
            return fn.call(context, ...args, ...newArgs)
        }

        return fn.call(context, ...newArgs)
    }
}

function testFun(p1, p2, p3, p4) {
    return  this.name + (p1 + p2 + p3 + p4)
}

var bindedFun = testFun.mybind({name: "hi "}, 1, 2)
console.log(bindedFun(3, 4))

bindedFun = testFun.mybind({name: "hi "}, 2, 3, 4, 5)
console.log(bindedFun())
