
// promise使用范例
const promise = new Promise((resolve, reject) => {
    (data, err) =>{
        if(!err){
            resolve(data)
        }else{
            reject(err)
        }
    }
})

promise.then((data) => {
    return data //成功回调
}, (err) => {
    return err //失败回调
})

// then(): 链式写法，按先后顺序执行
// catch(): 捕捉异常抛出
// finally(): 不论promise最后状态如何，都会执行该方法
// all(): const P = Promise.all([Promise1, Promise2, ...])
// 此时的P的状态分2种：
// ①如果Promise1, Promise2, ...最后执行结果都是成功的，那么P的状态是成功的，返回值是一个数组
// ②如果Promise1, Promise2, ...有一个失败状态，按第一个返回值传给P的回调函数
// race(): const p = Promise.race([p1, p2, p3])
// 如果p1, p2, p3之中有一个率先改变状态，那么P的状态就跟着改变，率先改变的 Promise 实例的返回值，
// 就传递给p的回调函数，如果指定时间内没有获得结果，那么p的状态就是reject
// try(): 如果要区分同步异步操作，或者捕捉同步异常可以使用try()catch()
//
//
// ajax是一个deferred对象   原理是ajax请求完成之后才会开始执行下面的success和error函数
// 可以通过promise的resolve方法将其转换为Promise对象
// const jsPromise = Promise.resolve($.ajax('/whatever.json'))











