import { decoratorsIntro } from "./decorators/pokemonClass";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TypeScript Generics</h1>
  </div>
`;

decoratorsIntro();
