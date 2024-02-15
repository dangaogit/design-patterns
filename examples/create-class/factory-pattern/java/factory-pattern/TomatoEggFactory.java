package factory;

public class TomatoEggFactory extends AbstractFoodFactory {
    @Override
    public IFood cook() {
        return new TomatoEggFood();
    }
}
