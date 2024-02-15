public class IdlerSingleton {
    private static IdlerSingleton instance;

    private IdlerSingleton() {}

    public static IdlerSingleton getInstance() {
        if (instance == null) {
            instance = new IdlerSingleton();
        }
        return instance;
    }
}
