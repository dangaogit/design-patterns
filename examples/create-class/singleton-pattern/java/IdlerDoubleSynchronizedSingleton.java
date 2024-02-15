public class IdlerDoubleSynchronizedSingleton {
    private static volatile IdlerDoubleSynchronizedSingleton instance;

    private IdlerDoubleSynchronizedSingleton() {}

    public static IdlerDoubleSynchronizedSingleton getInstance() {
        if (instance == null) {
            synchronized (IdlerDoubleSynchronizedSingleton.class) {
                if (instance == null) {
                    instance = new IdlerDoubleSynchronizedSingleton();
                }
            }
        }
        return instance;
    }
}
