let event = {
    list: {},
    on (type, fn) {
        if (!this.list[type]) {
            this.list[type] = [];
        }
        this.list[type].push(fn);
    }, 
    emit () {
        let type = [].shift.call(arguments);
        let fns = this.list[type];

        if (!fns || fns.length === 0) {
            return false
        }

        fns.forEach(fn => {
            fn.apply(this, arguments);
        })
    },
    remove (type, fn) {
        let fns = this.list[type];
        if (!fns || fns.length === 0)  return false

        if (!fn) {
            fns && (fns.length = 0 )
        }
    }
}
// 测试用例
corp.on('copy', function (position, salary) {
    console.log('你的职位是：' + position);
    console.log('期望薪水：' + salary);
});

corp.on('copy', function (position, salary) {
    console.log('你的职位是：' + position);
    console.log('期望薪水：' + salary);
});

corp.emit('copy', '端茶', '足球');
