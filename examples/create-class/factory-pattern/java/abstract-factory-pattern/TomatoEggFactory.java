package abstract_factory;

public class TomatoEggFactory extends AbstractFoodFactory {
    @Override
    public IFood createFood() {
        return new TomatoEggFood();
    }

    @Override
    public ITableware createTableware() {
        return new PlateTableware();
    }
}
