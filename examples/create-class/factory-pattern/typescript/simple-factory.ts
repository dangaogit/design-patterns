// 抽象产品类
class Product {
  food: string;
  constructor(ingredient: string) {
    this.food = ingredient;
  }
  cooking(food: string) {
    return `正在制作:${food}`;
  }
}

// 具体产品类1
class TomatoProduct extends Product {
  constructor(ingredient: string) {
    super(ingredient);
  }
}

// 具体产品类2
class PotatoProduct extends Product {
  constructor(ingredient: string) {
    super(ingredient);
  }
}

enum FoodType {
  Tomato = 0,
  Potato,
}

// 工厂类
class SimpleFoodFactory {
  public static createFood(type: FoodType, name: string) {
    switch (type) {
      case FoodType.Tomato:
        return new TomatoProduct(name);
      case FoodType.Potato:
        return new PotatoProduct(name);
      default:
        throw "Unknown product type.";
    }
  }
}

const product1 = SimpleFoodFactory.createFood(FoodType.Tomato, "番茄11");
product1.cooking("番茄11");
