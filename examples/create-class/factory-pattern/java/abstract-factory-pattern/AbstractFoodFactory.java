package abstract_factory;

public abstract class AbstractFoodFactory {
    public abstract IFood createFood();

    public abstract ITableware createTableware();
}