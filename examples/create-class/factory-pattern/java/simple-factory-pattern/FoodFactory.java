package simple;

public class FoodFactory {
    public static IFood cook(Ingredients ingredient) {
        switch (ingredient) {
            case TOMATO -> {
                return new TomatoEggFood();
            }
            case EGGPLANT -> {
                return new EggplantPotFood();
            }
            default -> throw new RuntimeException("I don't know how to do it");
        }
    }
}