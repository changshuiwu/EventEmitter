
### 手写一个Eventmitter

#### Usage

```
import  * as event from 'wu-eventemitter'

event.on('click', (...args) => {console.log(args)})
event.on('click', (...args) => {console.log(args)})


event.once('move', (...args) => {console.log(args)})

event.emit('move', 1,2,3)
event.emit('move', 4,5)

event.emit('click', 232)
event.emit('click', 111)
```

#### API

| name      | description                                          | 
| --------- | ---------------------------------------------------- | 
| on(type, cb, flag)        | 事件绑定                                              | 
| once(type, cb, flag)      | 事件绑定，但是只会触发一次                              | 
| emit(type,args)     | 事件触发                                              | 
| eventNames() | 返回所有的事件名                                       | 
| setMaxListeners(num)   | 设置最大可绑定的事件                              | 
| getMaxListeners()      | 返回最多可绑定的事件                                              | 
| addListener(type, cb, flag)      | 事件触发 （同on方法）                                             | 
| removeAllListeners()      | 移除所有绑定事件                                              | 
| removeListener(type)      | 移除绑定事件                                              | 
