function Base() {
    this.events = {}
}

var p = Base.prototype

p.on = function (event, fn) {
    (this.events[event] = this.events[event] || [])
        .push(fn)
}

p.trigger = function (event, value) {
    (this.events[event] || []).forEach((fn) => {
        fn.call(this, value)
    })
}

// 简化的jquery Extend

function merge(a, b) {
    if(!b) return a
    for(var key in b) {
        a[key] = b[key]
    }
    return a;
}

Base.extend = function (prototype, static) {
    var Super = this
    function S() {}
    S.prototype = Super.prototype
    function Klass() {
        Super.call(this)
    }

    Klass.prototype = merge(new S, prototype)
    // 静态方法merge进去
    return merge(merge(Klass, Base), static)
}



module.exports = Base
