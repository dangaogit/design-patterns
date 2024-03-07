/**
 * 组合代替继承
 */
// 实现类接口
interface Size {
  getSize(): string;
}

// 具体实现类
class LargeSize implements Size {
  getSize(): string {
    return "大杯";
  }
}

// 具体实现类
class SmallSize implements Size {
  getSize(): string {
    return "小杯";
  }
}

// 抽象类
abstract class Drink {
  size: Size;

  constructor(size: Size) {
    this.size = size;
  }

  abstract make(): void;
}

// 扩展抽象类
class MilkTea extends Drink {
  make(): void {
    console.log(this.size.getSize() + " 奶茶");
  }
}

// 扩展抽象类
class FruitTea extends Drink {
  make(): void {
    console.log(this.size.getSize() + " 水果茶");
  }
}

const bigSize = new LargeSize();
const smallSize = new SmallSize();
// 组合出口味和型号的实例
const bigMilkTea = new MilkTea(bigSize);
const smallMilkTea = new MilkTea(smallSize);
const bigFruitTea = new FruitTea(bigSize);
const smallFriutTea = new FruitTea(smallSize);
