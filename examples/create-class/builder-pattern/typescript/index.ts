// 定义一个汽车类【产品类】
class Car {
  public brand: string;
  public weels: number;
  public color: string;
  public engine: string;

  public showDetail() {
    console.log(
      `This car has ${this.weels} weels and its color is ${this.color}, and its engine is ${this.engine}, and its brand is ${this.brand}`
    );
  }
}

// 定义一个汽车建造者类【抽象建造者类】
interface CarBuilder {
  setBrand(brand: string): void;
  setWeels(weels: number): void;
  setColor(color: string): void;
  setEngine(engine: string): void;

  getResult(): Car;
}

// 实现汽车建造者类【具体建造者类】
class ConcreateCarBuilder implements CarBuilder {
  private car = new Car();

  setBrand(brand: string): void {
    this.car.brand = brand;
  }

  setWeels(weels: number): void {
    this.car.weels = weels;
  }

  setColor(color: string): void {
    this.car.color = color;
  }

  setEngine(engine: string): void {
    this.car.engine = engine;
  }

  getResult(): Car {
    return this.car;
  }
}

// 指挥者,接受建造者参数（），并生成具体产品
class Director {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  public constructSportCar() {
    this.builder.setBrand("BMW");
    this.builder.setWeels(4);
    this.builder.setColor("red");
    this.builder.setEngine("V8");
  }

  public constructSUVCar() {
    this.builder.setBrand("BYD");
    this.builder.setWeels(4);
    this.builder.setColor("black");
    this.builder.setEngine("V6");
  }
}

// 客户端
// 创建产品1
const builder = new ConcreateCarBuilder();
const director = new Director(builder);
director.constructSUVCar();
const sportCar = builder.getResult();
sportCar.showDetail();

// 创建产品2
const builder2 = new ConcreateCarBuilder();
const director2 = new Director(builder2);
director2.constructSportCar();
const suvCar = builder2.getResult();
suvCar.showDetail();
