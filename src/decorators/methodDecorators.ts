interface Hero {
  realName: string;
  name: string;
  saveHeroId: (id: number) => void;
}

function checkValidHeroId() {
  return function (
    target: Hero,
    methodKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const ogMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 7000) {
        throw new Error("Invalid hero ID!");
      }

      return ogMethod(id);
    };
  };
}

class HeroClass implements Hero {
  public realName: string;
  public name: string;

  constructor(name: string, realName: string) {
    this.name = name;
    this.realName = realName;
  }

  @checkValidHeroId()
  public saveHeroId(id: number) {
    console.log(`Saved hero in DB: ${id}`);
  }
}

export const methodDecorators = (): void => {
  const hulk: Hero = new HeroClass("Bruce Banner", "Hulk");
  console.log("Hulk:", hulk);

  hulk.saveHeroId(50);

  console.log("--- END METHOD DECORATORS FILE ---");
};
