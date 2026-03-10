interface Hero {
  realName: string;
  name: string;
}

function printToConsole(constructor: Function): void {
  console.log(constructor);
}

function conditionalPrintToConsole(
  print: boolean = false,
): ((constructor: Function) => void) | (() => void) {
  if (print) {
    return printToConsole;
  }

  return () => {
    console.log("¡Hola Mundo!");
  };
}

function sealHeroClass(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealHeroClass
@conditionalPrintToConsole()
class HeroClass implements Hero {
  public realName: string;
  public name: string;

  constructor(name: string, realName: string) {
    this.name = name;
    this.realName = realName;
  }
}

export const decoratorUseCaseExample = (): void => {
  const captainAmerica: Hero = new HeroClass("Steve Rogers", "Captain America");

  /*
   ! These lines with the sealHeroClass are not allowed!
   * (captainAmerica as any).lolo = "lolo";
   * (HeroClass.prototype as any).customName = "Lalo";
   */

  console.log("Captain America:", captainAmerica);

  console.log("--- END DECORATOR USE EXAMPLE FILE ---");
};
