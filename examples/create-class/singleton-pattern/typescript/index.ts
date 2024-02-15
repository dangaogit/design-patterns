class Singleton {
  private constructor() {}

  private static instance: Singleton;

  public static getInstance(): Singleton {
    if (this.instance === null) {
      return new Singleton();
    }
    return this.instance;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
  console.log("Singleton works.");
} else {
  console.log("Singleton failed.");
}
