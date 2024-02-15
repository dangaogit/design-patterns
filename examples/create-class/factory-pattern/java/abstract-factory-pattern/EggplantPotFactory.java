package abstract_factory;

public class EggplantPotFactory extends AbstractFoodFactory {
    @Override
    public IFood createFood() {
        return new EggplantPotFood();
    }

    @Override
    public ITableware createTableware() {
        return new BasinTableware();
    }
}
