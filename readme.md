# design-patterns

设计模式练习册

# todos
## 创建型 - Create Class
> 单例模式 Singleton Pattern
- [x] Typescript
- [x] Java

> 简单工厂模式 Simple Factory Pattern
- 定义：通过工厂类来实现不同类型的对象，这些对象有一个共同的父类或接口
- 组成：
  - 工厂类：接受传入参数，决定创建哪一种类型的对象
  - 抽象产品类：通常为一个接口或一个抽象类，定义产品的接口（方法和属性）
  - 具体产品类：实现或继承抽象产品类，定义具体的产品
- 使用场景：
- 优缺点：  
  - 封装性好：客户端不需要知道他所创建的对象类，知道具体的产品即可，减少客户端与具体产品之间的耦合
  - 将产品的创建和使用分离，降低系统的耦合度
  - 违反开闭原则：当需要添加新产品时，都需要修改工厂类代码，违反开闭原则
  - 拓展性差：增加一个产品种类多时，工厂类中的方法会有大量的逻辑判断，增加复杂度
  - 职责过重：工厂类中集中了所有产品的创建逻辑，一旦出错，整个系统都会受影响
- [x] Typescript
- [x] Java

> 工厂模式 Factory Pattern
- [x] Typescript
- [ ] Java

> 抽象工厂模式 Abstract Factory Pattern
- 组成：
  - 抽象工厂类
  - 具体工厂类：实现抽象工厂的操作，制作出具体的产品
  - 抽象产品类：声明产品的属性和方法
  - 具体产品类：抽象产品的实现类，定义具体工厂所创建的具体产品对象
- [x] Typescript
- [ ] Java

> 建造者模式 Builder Pattern
- [ ] Typescript
- [ ] Java

> 原型模式 Prototype Pattern
- [ ] Typescript
- [ ] Java


## 行为型 - Behavior Class
> 责任链模式 Chain of responsibility Pattern
- [ ] Typescript
- [ ] Java

> 策略模式 Strategy Pattern
- [ ] Typescript
- [ ] Java

> 命令模式 Command Pattern
- [ ] Typescript
- [ ] Java

> 观察者模式 Observer Pattern
- [ ] Typescript
- [ ] Java

> 访问者模式 Visitor Pattern
- [ ] Typescript
- [ ] Java

> 状态模式 State Pattern
- [ ] Typescript
- [ ] Java

> 解释器模式 Interpreter Pattern
- [ ] Typescript
- [ ] Java

> 迭代器模式 Iterator Pattern
- [ ] Typescript
- [ ] Java

> 中介者模式 Mediator Pattern
- [ ] Typescript
- [ ] Java

> 备忘录模式 Memento Pattern
- [ ] Typescript
- [ ] Java


## 结构型 - Structure Class
> 外观模式 Facade Pattern
- [ ] Typescript
- [ ] Java

> 适配器模式 Adapter Pattern
- [ ] Typescript
- [ ] Java

> 桥接模式 Bridge Pattern
- [ ] Typescript
- [ ] Java

> 组合模式 Composite Pattern
- [ ] Typescript
- [ ] Java

> 装饰器模式 Decorator Pattern
- [ ] Typescript
- [ ] Java

> 享元模式 Flyweight Pattern
- [ ] Typescript
- [ ] Java

> 代理模式 Proxy Pattern
- [ ] Typescript
- [ ] Java

