interface Hero {
  realName: string;
  name: string;
  showApi(): void;
}

class HeroClass implements Hero {
  readonly #privateApi: string = "https://www.marvel.com/";
  public realName: string;
  public name: string;

  constructor(name: string, realName: string) {
    this.name = name;
    this.realName = realName;
  }

  public showApi(): void {
    console.log(this.#privateApi);
  }
}

export const propertyDecorators = (): void => {
  const spiderman: Hero = new HeroClass("Peter Parker", "Spiderman");
  console.log("Spiderman:", { ...spiderman });

  spiderman.showApi();

  console.log("--- END PROPERTY DECORATORS FILE ---");
};
