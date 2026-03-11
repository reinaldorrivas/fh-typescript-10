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

  return () => {console.log("¡Hola Mundo!")};
}

@conditionalPrintToConsole(true)
class HeroClass implements Hero {
  public realName: string;
  public name: string;

  constructor(name: string, realName: string) {
    this.name = name;
    this.realName = realName;
  }
}

export const factoryDecorators = (): void => {
  const wolverine: Hero = new HeroClass("Logan", "Wolverine");
  console.log("Wolverine:", wolverine);

  console.log("--- END FACTORY DECORATORS FILE ---");
};
