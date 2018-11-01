
// Set本身是一个构造函数，类似于数组，但是成员都是唯一的
const set = new Set([1,2,3,4,5])
console.log([...set]);//[1,2,3,4,5]
console.log(set.size)//5

let arr = Array.from(new Set([1,2,3,4,5,6]));
console.log(arr.length)//6
console.log(arr);
console.log(arr instanceof Array)
console.log(set instanceof Array);//false 类数据 还包括Map对象











