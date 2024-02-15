public class IdlerSynchronizedSingleton {
    private  static IdlerSynchronizedSingleton instance;

    private  IdlerSynchronizedSingleton() {}

    public static synchronized IdlerSynchronizedSingleton getInstance() {
        if (instance == null) {
            instance = new IdlerSynchronizedSingleton();
        }
        return instance;
    }
}
