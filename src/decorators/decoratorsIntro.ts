interface Pokemon {
  publicApi: string;
  name: string;
}

function printToConsole(constructor: Function) {
  console.log(constructor);
}

@printToConsole
class PokemonClass implements Pokemon {
  public publicApi: string = "https://pokeapi.co/";
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export const decoratorsIntro = (): void => {
  const charmander: Pokemon = new PokemonClass("Charmander");
  console.log("Pokemon:", charmander);

  console.log("--- END DECORATORS INTRO FILE ---");
};
