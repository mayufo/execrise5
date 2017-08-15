class Base {
    constructor () {
        this.events = {};
    }
    on(event, fn) {
        (this.events[event] = this.events[event] || []).push(fn)
    }
    trigger(event, value) {
        (this.events[event] || []).forEach((fn) => {
            fn.call(this, value)
        })
    }
}

module.exports = Base
