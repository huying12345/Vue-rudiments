
// 输出0-9
var funcs = []
var funcs2 = []
var funcs3 = []
console.log("========方法一：立即执行==========")
for (var i = 0; i < 10; i++) {
    funcs.push((function (i) {
        console.log(i)
    })(i))
}
console.log("========方法二：let=========")
for (let i = 0; i < 10; i++) {
    funcs2.push(function () {
        console.log(i)
    })
}
funcs2.forEach(function (func) {
    func();
})
console.log("========方法三：闭包=========")
for(var i = 0; i < 10; i++){
    funcs3.push(show(i))
}
funcs3.forEach(function (func) {
    func()
})
function show(i) {
    return function () {
        console.log(i)
    }
}









