// 抽象产品类
abstract class AbstractProduct {
  cooking(food: string) {
    return `正在制作:${food}`;
  }
}

// 具体产品类1
class ProductA implements AbstractProduct {
  protected food: string;
  constructor(ingredient: string) {
    this.food = ingredient;
  }

  cooking(food: string): string {
    return `ProductA正在制作:${food}`;
  }
}

// 具体产品类2
class ProductB implements AbstractProduct {
  protected food: string;
  constructor(ingredient: string) {
    this.food = ingredient;
  }

  cooking(food: string): string {
    return `ProductB正在制作:${food}`;
  }
}

enum FoodType {
  IProductA = 0,
  IProductB,
}

// 工厂类
class FoodFactory {
  public static createFood(type: FoodType) {
    switch (type) {
      case FoodType.IProductA:
        return new ProductA("番茄");
      case FoodType.IProductB:
        return new ProductB("土豆");
      default:
        throw "Unknown product type.";
    }
  }
}

const product11 = FoodFactory.createFood(FoodType.IProductA);
product11.cooking("番茄11");
