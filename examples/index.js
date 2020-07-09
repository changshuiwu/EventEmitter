
// import  * as event from '../src/index'
import  * as event from 'wu-eventemitter'




event.on('click', (...args) => {console.log(args)})
event.on('click', (...args) => {console.log(args)})


event.once('move', (...args) => {console.log(args)})

event.emit('move', 1,2,3)
event.emit('move', 4,5)

event.emit('click', 232)
event.emit('click', 111)


