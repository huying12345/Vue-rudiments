// // // // const promise = new Promise((resolve, reject) => {
// // // //     console.log(1)
// // // //     resolve()
// // // //     console.log(2)
// // // // })
// // // // promise.then(() => {
// // // //     console.log(3) //异步执行
// // // // })
// // // // console.log(4)
// // // //
// // // // //1 2 4 3
// // // //
// // // //
// // // // setTimeout(function () {
// // // //     alert(1)
// // // // }, 0);
// // // // new Promise(function executor(resolve) {
// // // //     alert(2);
// // // //     for (var i = 0; i < 10000; i++) {
// // // //         i == 9999 && resolve();
// // // //     }
// // // //     alert(3);
// // // // }).then(function () {
// // // //     alert(4);
// // // // });
// // // // alert(5);
// // // // //2 3 5 4 1
// // //
// // //
// // // const promise1 = new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //         resolve('success')
// // //     }, 1000)
// // // })
// // // const promise2 = promise1.then(() => {
// // //     throw new Error('error!!!')
// // // })
// // //
// // // console.log('promise1', promise1)
// // // console.log('promise2', promise2)
// // //
// // // setTimeout(() => {
// // //     console.log('promise1', promise1)
// // //     console.log('promise2', promise2)
// // // }, 2000)
// // // // success
// //
// // const promise = new Promise((resolve, reject) => {
// //     resolve('success1')
// //     reject('error')
// //     resolve('success2')
// // })
// //
// // promise
// //     .then((res) => {
// //         console.log('then: ', res)
// //     })
// //     .catch((err) => {
// //         console.log('catch: ', err)
// //     })
// // //then:  success1
//
// Promise.resolve(1)
//     .then((res) => {
//         console.log(res)
//         return 44
//     })
//     .catch((err) => {
//         return 3
//     })
//     .then((res) => {
//         console.log(res)
//     })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('once')
        resolve('success')
    }, 1000)
})

const start = Date.now()
promise.then((res) => {
    console.log(res, Date.now() - start)
})
promise.then((res) => {
    console.log(res, Date.now() - start)
})
