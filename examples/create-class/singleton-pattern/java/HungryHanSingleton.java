public class HungryHanSingleton {
    private static final HungryHanSingleton instance = new HungryHanSingleton();

    private HungryHanSingleton() {}

    public static HungryHanSingleton getInstance() {
        return instance;
    }
}
