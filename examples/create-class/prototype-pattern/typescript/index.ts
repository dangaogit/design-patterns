// 抽象原型类
interface Prototype {
  clone(): Prototype;
}

// 具体原型类
class Dog implements Prototype {
  public name: string;
  public age: number;

  constructor() {
    this.name = "wangcai";
    this.age = 13;
  }

  public getDetail() {
    console.log(
      `this dog name is ${this.name}, this year has been ${this.age}`
    );
  }

  public clone(): Prototype {
    return Object.create(this);
  }
}

// 客户端
var wangcai = new Dog();
wangcai.getDetail();
// 修改原型属性--每个实例会被同步修改
wangcai.name = "kele";

var kele = wangcai.clone();
wangcai.getDetail();
