

function EventEmitter() {
    this._events = Object.create(null);
}
// 默认最多的绑定次数
EventEmitter._defaultMaxListeners = 10;

// 返回所有的事件名
EventEmitter.prototype.eventNames = function() {
    return Object.keys(this._events)
}

// 设置最多可绑定的事件
EventEmitter.prototype.setMaxListeners = function (count) {
    this._count = count
}
// 返回最多可绑定的事件
EventEmitter.prototype.getMaxListeners = function() {
    return this._count ? this._count : EventEmitter._defaultMaxListeners
}

EventEmitter.prototype.on = function(type, cb, flag) {
    if (!this._events) {
        this._events = Object.create(null);
    }

    if (this._events[type] && this._events[type].length === this.getMaxListeners()) {
        throw new Error('达到绑定事件上线')
    }
    
    if (type !== 'newListener') {
        this._events['newListener'] && this._events['newListener'].forEach( listener => {
            listener(type)
        })
    }

    if (this._events[type]) {
        if (flag) {
            this._events[type].unshift(cb)
        } else {
            this._events[type].push(cb)
        }
    } else {
        this._events[type] = [cb]
    }
}

// once
EventEmitter.prototype.once = function(type, cb, flag) {
        
    // 先绑定，调用后删除
    function wrap() {
        cb(...arguments);
        this.removeListener(type, wrap);
    }
    // 自定义属性
    // wrap.listen = cb;
    this.on(type, wrap, flag);
}

EventEmitter.prototype.addListener = EventEmitter.prototype.on

//emit 
EventEmitter.prototype.emit = function() {
    let type = [].shift.call(arguments)
    if (this._events[type]) {
        this._events[type].forEach(fn => {
            fn.apply(this, arguments)
        })
    }
    
}

EventEmitter.prototype.listeners = function(type) {
    return this._events[type]
}

EventEmitter.prototype.removeAllListeners = function () {
    this._events = Object.create(null)
}

EventEmitter.prototype.removeListener = function(type) {
    if( this._events[type]) {
        this._events[type] = null
    }
}

export default new EventEmitter()