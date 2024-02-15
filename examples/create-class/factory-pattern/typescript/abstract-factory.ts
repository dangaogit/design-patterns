namespace AbstractFactoryPattern {
  // 抽象产品类
  interface AbstractProduct {
    cooking(foodName: string): string;
  }

  // 具体产品类1
  class TomatoProduct implements AbstractProduct {
    protected food: string;
    constructor(ingredient: string) {
      this.food = ingredient;
    }

    cooking(foodName: string) {
      return `TomatoProduct1正在制作:${foodName}`;
    }
  }

  // 具体产品类2
  class TomatoProduct2 implements AbstractProduct {
    protected food: string;
    constructor(ingredient: string) {
      this.food = ingredient;
    }

    cooking(foodName: string) {
      return `TomatoProduct1正在制作:${foodName}`;
    }
  }

  // 具体产品类3
  class PotatoProduct implements AbstractProduct {
    protected food: string;
    constructor(ingredient: string) {
      this.food = ingredient;
    }

    cooking(foodName: string) {
      return `PotatoProduct正在制作:${foodName}`;
    }
  }

  // 具体产品类4
  class PotatoProduct2 implements AbstractProduct {
    protected food: string;
    constructor(ingredient: string) {
      this.food = ingredient;
    }

    cooking(foodName: string) {
      return `PotatoProduct2正在制作:${foodName}`;
    }
  }

  // 抽象工厂类
  interface AbstractFactory {
    createTomatoProduct(): AbstractProduct;
    createPotatoProduct(): AbstractProduct;
  }

  // 具体工厂类1
  class Factory1 implements AbstractFactory {
    createPotatoProduct(): PotatoProduct {
      return new PotatoProduct("番茄1");
    }
    createTomatoProduct(): TomatoProduct {
      return new TomatoProduct("土豆1");
    }
  }

  // 具体工厂类2
  class Factory2 implements AbstractFactory {
    createPotatoProduct(): PotatoProduct2 {
      return new PotatoProduct2("番茄2");
    }
    createTomatoProduct(): TomatoProduct2 {
      return new TomatoProduct2("土豆2");
    }
  }

  const factory1 = new Factory1();
  factory1.createPotatoProduct();
  factory1.createTomatoProduct();

  const factory2 = new Factory2();
  factory2.createPotatoProduct();
  factory2.createTomatoProduct();
}
