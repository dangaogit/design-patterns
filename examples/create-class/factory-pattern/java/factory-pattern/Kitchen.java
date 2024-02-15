package factory;

public class Kitchen {
    public static void main(String[] args) {
        AbstractFoodFactory foodFactory = new EggplantPotFactory();
        System.out.println("I ate " + foodFactory.cook());
    }
}
