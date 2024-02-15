package factory;

public class EggplantPotFactory extends AbstractFoodFactory {
    @Override
    public IFood cook() {
        return new EggplantPotFood();
    }
}
