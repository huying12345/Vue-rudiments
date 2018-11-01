
// JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
const map = new Map()
    .set('No1', {'No1': '气球'})
    .set('No2', {'No2': '篮球'})
    .set('No3', {'No3': '气球'})

console.log(map.size);//3

map.delete('No3');
console.log(map.has('No3'));//false

console.log(map.get('No2'));//{No2: "篮球"}
console.log(map instanceof Array);//false
console.log(map instanceof Map);//true

// Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）
let arr = [...map];
console.log(arr instanceof Array);//true

let arr2 = Array.from(map)
console.log(arr2 instanceof Array);//true

//结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。
let maps = new Map(
    [...map].filter(([k,v]) => k = 'No1')
)
console.log(maps.get('No1'));//{No1: "气球"}

let map2 = new Map(
    [...map].map(([k, v]) => [ 'map2_'+ k, v])
)
console.log(map2);

map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
});

map.clear();//清除所有成员
console.log(map.size);//0



