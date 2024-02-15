package simple;

public class Kitchen {
    public static void main(String[] args) {
        IFood food = FoodFactory.cook(Ingredients.EGGPLANT);
        System.out.println("I ate " + food);
    }
}
