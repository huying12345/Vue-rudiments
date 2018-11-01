
// constructor方法必需
class Parent{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.p = 2;
    }
    get prop(){
        return 'getter';
    }
    set prop(value){
        console.log('setter: '+value);
    }
    toString(){
        return '（' + this.x + '，' + this.y + '）';
    }
}

let newParent = new Parent();
newParent.prop = "这个是setter";
console.log(newParent.prop);//setter: 这个是setter   getter


let child = new Parent(1,43);
console.log(child.toString())

console.log(child.hasOwnProperty('x'));//true 是否有自己的属性x
console.log(child.hasOwnProperty('y'));//true 是否有自己的属性y
console.log(child.hasOwnProperty('toString')); //false 是否有自己的属性toString
console.log(child.__proto__.hasOwnProperty('toString'));//true __proto__为自己添加方法

console.log("===============继承============")
class Child extends Parent{
    getXValue(){
        return "this id x: " + this.x
    }
    getTarget(){
        // noinspection JSAnnotator
        if(new.target === Child){
            // noinspection JSAnnotator
            console.log(new.target)
        }else{
            // noinspection JSAnnotator
            console.log(new.target)
        }
    }
}
let newChild = new Child('你好','ES6');

console.log(newChild.getXValue());//this id x: 你好
console.log(newChild.toString());//（你好，ES6）
console.log(newChild.hasOwnProperty('x'));//true 是否有自己的属性x
console.log(newChild.hasOwnProperty('y'));//true 是否有自己的属性y
console.log(newChild.hasOwnProperty('toString')); //false 是否有自己的属性toString
console.log(newChild.__proto__.hasOwnProperty('toString'));//false
console.log(newChild.hasOwnProperty('getXValue'));//false
console.log(newChild.__proto__.hasOwnProperty('getXValue'));//true

console.log(Child.name);//Child  name属性
newChild.getTarget();//target is undefined!

//super

console.log("========================")
class Child2 extends Parent{
    constructor(x,y){
        super();//继承父类的constructor  子类的构造函数之中必须要有super()，代表调用父类的构造函数
        this.x2 = "x2"
    }
}

let child2 = new Child2(2,4);
console.log(child2.x2);//x2
console.log(child2.p);//2
console.log(child2.x);//undefined







